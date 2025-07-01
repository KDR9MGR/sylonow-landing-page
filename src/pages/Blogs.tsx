import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, User, Plus } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/lib/supabase';

interface BlogData {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image_url: string | null;
  published_at: string;
  reading_time: number;
  is_featured: boolean;
  category_id: string | null;
  author_id: string | null;
}

interface CategoryData {
  id: string;
  name: string;
  slug: string;
  color: string;
}

interface AuthorData {
  id: string;
  first_name: string;
  last_name: string;
}

interface BlogWithDetails extends BlogData {
  category?: CategoryData;
  author?: AuthorData;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogWithDetails[]>([]);
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState<string>('user');

  useEffect(() => {
    checkUserRole();
    fetchCategories();
    fetchBlogs();
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [selectedCategory]);

  const checkUserRole = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();
      
      if (profile) {
        setUserRole(profile.role);
      }
    }
  };

  const fetchCategories = async () => {
    const { data } = await supabase
      .from('blog_categories')
      .select('*')
      .order('name');
    
    if (data) {
      setCategories(data);
    }
  };

  const fetchBlogs = async () => {
    setLoading(true);

    let query = supabase
      .from('blogs')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false });

    // Filter by category if selected
    if (selectedCategory !== 'all') {
      const selectedCat = categories.find(cat => cat.slug === selectedCategory);
      if (selectedCat) {
        query = query.eq('category_id', selectedCat.id);
      }
    }

    const { data: blogsData } = await query;

    if (blogsData) {
      // Fetch additional details for each blog
      const blogsWithDetails: BlogWithDetails[] = await Promise.all(
        blogsData.map(async (blog) => {
          const blogWithDetails: BlogWithDetails = { ...blog };

          // Fetch category if exists
          if (blog.category_id) {
            const { data: categoryData } = await supabase
              .from('blog_categories')
              .select('*')
              .eq('id', blog.category_id)
              .single();
            
            if (categoryData) {
              blogWithDetails.category = categoryData;
            }
          }

          // Fetch author if exists
          if (blog.author_id) {
            const { data: authorData } = await supabase
              .from('profiles')
              .select('id, first_name, last_name')
              .eq('id', blog.author_id)
              .single();
            
            if (authorData) {
              blogWithDetails.author = authorData;
            }
          }

          return blogWithDetails;
        })
      );

      setBlogs(blogsWithDetails);
    }

    setLoading(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Blogs - Insights & Stories | Sylonow</title>
        <meta name="description" content="Discover the latest insights, stories, and updates from Sylonow. Explore our blog for celebration tips, technology trends, and industry news." />
        <meta name="keywords" content="Sylonow blog, celebration tips, technology insights, business stories, lifestyle content" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sylonow.com/blogs" />
        <meta property="og:title" content="Blogs - Insights & Stories | Sylonow" />
        <meta property="og:description" content="Discover the latest insights, stories, and updates from Sylonow. Explore our blog for celebration tips, technology trends, and industry news." />
        <meta property="og:image" content="/og-image.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://sylonow.com/blogs" />
        <meta name="twitter:title" content="Blogs - Insights & Stories | Sylonow" />
        <meta name="twitter:description" content="Discover the latest insights, stories, and updates from Sylonow. Explore our blog for celebration tips, technology trends, and industry news." />
        <meta name="twitter:image" content="/og-image.jpg" />
        
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sylonow.com/blogs" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
        <Navbar />
        
        <div className="flex-grow pt-20">
          {/* Header Section */}
          <motion.div 
            className="max-w-6xl mx-auto px-4 py-16"
            {...fadeInUp}
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-6"
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover insights, stories, and updates from the world of celebrations and technology
              </p>
              
              {userRole === 'admin' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <Link to="/admin/blogs/new">
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                      <Plus className="w-4 h-4 mr-2" />
                      Create New Blog
                    </Button>
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Category Filter */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('all')}
                className={selectedCategory === 'all' ? 'bg-gradient-to-r from-pink-500 to-purple-500' : ''}
              >
                All Posts
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.slug ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={selectedCategory === category.slug ? 'bg-gradient-to-r from-pink-500 to-purple-500' : ''}
                >
                  {category.name}
                </Button>
              ))}
            </motion.div>
          </motion.div>

          {/* Blog Grid */}
          <div className="max-w-6xl mx-auto px-4 pb-20">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="bg-gray-300 h-48 rounded-lg mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                  </div>
                ))}
              </div>
            ) : blogs.length === 0 ? (
              <motion.div 
                className="text-center py-16"
                {...fadeInUp}
              >
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No blogs found</h3>
                <p className="text-gray-600">
                  {selectedCategory === 'all' 
                    ? "There are no published blogs yet. Check back soon!" 
                    : `No blogs found in the ${categories.find(c => c.slug === selectedCategory)?.name} category.`
                  }
                </p>
              </motion.div>
            ) : (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {blogs.map((blog) => (
                  <motion.div
                    key={blog.id}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                      {blog.featured_image_url && (
                        <div className="aspect-video relative overflow-hidden">
                          <img
                            src={blog.featured_image_url}
                            alt={blog.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                          {blog.is_featured && (
                            <Badge className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-500">
                              Featured
                            </Badge>
                          )}
                        </div>
                      )}
                      
                      <CardHeader>
                        {blog.category && (
                          <Badge 
                            variant="secondary" 
                            className="w-fit mb-2"
                            style={{ backgroundColor: `${blog.category.color}20`, color: blog.category.color }}
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {blog.category.name}
                          </Badge>
                        )}
                        
                        <CardTitle className="line-clamp-2 hover:text-pink-600 transition-colors">
                          <Link to={`/blogs/${blog.slug}`}>
                            {blog.title}
                          </Link>
                        </CardTitle>
                        
                        {blog.excerpt && (
                          <CardDescription className="line-clamp-3">
                            {blog.excerpt}
                          </CardDescription>
                        )}
                      </CardHeader>
                      
                      <CardContent className="flex-1">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(blog.published_at)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {blog.reading_time} min read
                          </div>
                        </div>
                        
                        {blog.author && (
                          <div className="flex items-center gap-1 mt-2 text-sm text-gray-600">
                            <User className="w-4 h-4" />
                            By {blog.author.first_name} {blog.author.last_name}
                          </div>
                        )}
                      </CardContent>
                      
                      <CardFooter>
                        <Link to={`/blogs/${blog.slug}`} className="w-full">
                          <Button variant="outline" className="w-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition-all">
                            Read More
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default Blogs; 