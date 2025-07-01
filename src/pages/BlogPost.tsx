import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, User, ArrowLeft, Eye } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image_url: string | null;
  published_at: string;
  reading_time: number;
  seo_title: string;
  seo_description: string;
  category_id: string;
  author_id: string;
}

interface Category {
  name: string;
  slug: string;
  color: string;
}

interface Author {
  first_name: string;
  last_name: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [category, setCategory] = useState<Category | null>(null);
  const [author, setAuthor] = useState<Author | null>(null);
  const [loading, setLoading] = useState(true);
  const [viewsCount, setViewsCount] = useState(0);

  useEffect(() => {
    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  const fetchBlog = async () => {
    try {
      // Fetch blog post
      const { data: blogData, error: blogError } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .single();

      if (blogError || !blogData) {
        navigate('/blogs');
        return;
      }

      setBlog(blogData);

      // Fetch category if exists
      if (blogData.category_id) {
        const { data: categoryData } = await supabase
          .from('blog_categories')
          .select('name, slug, color')
          .eq('id', blogData.category_id)
          .single();
        
        if (categoryData) {
          setCategory(categoryData);
        }
      }

      // Fetch author if exists
      if (blogData.author_id) {
        const { data: authorData } = await supabase
          .from('profiles')
          .select('first_name, last_name')
          .eq('id', blogData.author_id)
          .single();
        
        if (authorData) {
          setAuthor(authorData);
        }
      }

      // Track view
      await trackView(blogData.id);
      
      // Get views count
      const { count } = await supabase
        .from('blog_views')
        .select('*', { count: 'exact' })
        .eq('blog_id', blogData.id);
      
      if (count) {
        setViewsCount(count);
      }

    } catch (error) {
      console.error('Error fetching blog:', error);
      navigate('/blogs');
    } finally {
      setLoading(false);
    }
  };

  const trackView = async (blogId: string) => {
    try {
      await supabase
        .from('blog_views')
        .insert({
          blog_id: blogId,
          ip_address: await fetch('https://api.ipify.org').then(r => r.text()).catch(() => ''),
          user_agent: navigator.userAgent
        });
    } catch (error) {
      // Silently fail view tracking
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
        <Navbar />
        <div className="flex-grow pt-20 flex items-center justify-center">
          <div className="animate-pulse space-y-4 max-w-4xl mx-auto px-4">
            <div className="h-8 bg-gray-300 rounded w-1/3"></div>
            <div className="h-64 bg-gray-300 rounded"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              <div className="h-4 bg-gray-300 rounded w-4/6"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
        <Navbar />
        <div className="flex-grow pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog post not found</h1>
            <Link to="/blogs">
              <Button variant="outline">Back to Blogs</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.seo_title || blog.title} | Sylonow</title>
        <meta name="description" content={blog.seo_description || blog.excerpt} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.excerpt} />
        <meta property="og:image" content={blog.featured_image_url || '/og-image.jpg'} />
        <meta property="og:url" content={`https://sylonow.com/blogs/${blog.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
        <Navbar />
        
        <div className="flex-grow pt-20">
          <article className="max-w-4xl mx-auto px-4 py-12">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <Link to="/blogs">
                <Button variant="ghost" className="hover:bg-pink-50 text-pink-600">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blogs
                </Button>
              </Link>
            </motion.div>

            {/* Article Header */}
            <motion.header 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {category && (
                <Badge 
                  className="mb-4"
                  style={{ backgroundColor: `${category.color}20`, color: category.color }}
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {category.name}
                </Badge>
              )}
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {blog.title}
              </h1>
              
              {blog.excerpt && (
                <p className="text-xl text-gray-600 mb-6">
                  {blog.excerpt}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                {author && (
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>By {author.first_name} {author.last_name}</span>
                  </div>
                )}
                
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(blog.published_at)}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blog.reading_time} min read</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{viewsCount} views</span>
                </div>
              </div>
            </motion.header>

            {/* Featured Image */}
            {blog.featured_image_url && (
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <img
                  src={blog.featured_image_url}
                  alt={blog.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            )}

            {/* Article Content */}
            <motion.div 
              className="prose prose-lg max-w-none prose-pink prose-headings:text-gray-900 prose-a:text-pink-600 prose-a:no-underline hover:prose-a:underline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Article Footer */}
            <motion.footer 
              className="mt-12 pt-8 border-t border-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex justify-between items-center">
                <Link to="/blogs">
                  <Button variant="outline" className="hover:bg-pink-50 hover:text-pink-600 hover:border-pink-300">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    More Articles
                  </Button>
                </Link>
                
                <div className="text-sm text-gray-500">
                  Published on {formatDate(blog.published_at)}
                </div>
              </div>
            </motion.footer>
          </article>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPost; 