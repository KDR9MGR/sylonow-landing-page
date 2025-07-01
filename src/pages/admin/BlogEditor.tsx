import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Save, ArrowLeft, Eye, Upload, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

interface BlogForm {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image_url: string;
  category_id: string;
  status: 'draft' | 'published';
  is_featured: boolean;
  reading_time: number;
  seo_title: string;
  seo_description: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  color: string;
}

const BlogEditor = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEdit = id !== 'new';
  
  const [form, setForm] = useState<BlogForm>({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    featured_image_url: '',
    category_id: '',
    status: 'draft',
    is_featured: false,
    reading_time: 5,
    seo_title: '',
    seo_description: ''
  });

  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [userRole, setUserRole] = useState<string>('user');

  useEffect(() => {
    checkUserRole();
    fetchCategories();
    if (isEdit) {
      fetchBlog();
    } else {
      setLoading(false);
    }
  }, [id]);

  const checkUserRole = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();
      
      if (profile?.role !== 'admin') {
        navigate('/blogs');
        return;
      }
      setUserRole(profile.role);
    } else {
      navigate('/blogs');
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

  const fetchBlog = async () => {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !data) {
      toast.error('Blog not found');
      navigate('/blogs');
      return;
    }

    setForm({
      title: data.title,
      slug: data.slug,
      content: data.content,
      excerpt: data.excerpt || '',
      featured_image_url: data.featured_image_url || '',
      category_id: data.category_id || '',
      status: data.status,
      is_featured: data.is_featured,
      reading_time: data.reading_time,
      seo_title: data.seo_title || '',
      seo_description: data.seo_description || ''
    });

    setLoading(false);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (title: string) => {
    setForm(prev => ({
      ...prev,
      title,
      slug: generateSlug(title),
      seo_title: title
    }));
  };

  const estimateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  };

  const handleContentChange = (content: string) => {
    setForm(prev => ({
      ...prev,
      content,
      reading_time: estimateReadingTime(content)
    }));
  };

  const handleSave = async (status: 'draft' | 'published') => {
    if (!form.title.trim() || !form.content.trim()) {
      toast.error('Title and content are required');
      return;
    }

    setSaving(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast.error('You must be logged in');
        return;
      }

      const blogData = {
        ...form,
        status,
        author_id: user.id,
        published_at: status === 'published' ? new Date().toISOString() : null,
        updated_at: new Date().toISOString()
      };

      if (isEdit) {
        const { error } = await supabase
          .from('blogs')
          .update(blogData)
          .eq('id', id);

        if (error) throw error;
        toast.success('Blog updated successfully!');
      } else {
        const { error } = await supabase
          .from('blogs')
          .insert(blogData);

        if (error) throw error;
        toast.success('Blog created successfully!');
      }

      navigate('/blogs');
    } catch (error: any) {
      toast.error(error.message || 'Failed to save blog');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
        <Navbar />
        <div className="flex-grow pt-20 flex items-center justify-center">
          <div className="animate-pulse space-y-4 max-w-4xl mx-auto px-4">
            <div className="h-8 bg-gray-300 rounded w-1/3"></div>
            <div className="h-32 bg-gray-300 rounded"></div>
            <div className="h-64 bg-gray-300 rounded"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{isEdit ? 'Edit Blog' : 'Create Blog'} | Sylonow Admin</title>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
        <Navbar />
        
        <div className="flex-grow pt-20">
          <div className="max-w-6xl mx-auto px-4 py-12">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    {isEdit ? 'Edit Blog Post' : 'Create New Blog Post'}
                  </h1>
                  <p className="text-gray-600 mt-2">
                    {isEdit ? 'Update your blog post' : 'Create engaging content for your audience'}
                  </p>
                </div>
                
                <Button
                  variant="outline"
                  onClick={() => navigate('/blogs')}
                  className="hover:bg-pink-50 text-pink-600"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blogs
                </Button>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button
                  onClick={() => handleSave('draft')}
                  disabled={saving}
                  variant="outline"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save as Draft
                </Button>
                
                <Button
                  onClick={() => handleSave('published')}
                  disabled={saving}
                  className="bg-gradient-to-r from-pink-500 to-purple-500"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  {form.status === 'published' ? 'Update' : 'Publish'}
                </Button>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Content</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="title">Title *</Label>
                      <Input
                        id="title"
                        value={form.title}
                        onChange={(e) => handleTitleChange(e.target.value)}
                        placeholder="Enter blog title..."
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="slug">URL Slug</Label>
                      <Input
                        id="slug"
                        value={form.slug}
                        onChange={(e) => setForm(prev => ({ ...prev, slug: e.target.value }))}
                        placeholder="url-slug"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="excerpt">Excerpt</Label>
                      <Textarea
                        id="excerpt"
                        value={form.excerpt}
                        onChange={(e) => setForm(prev => ({ ...prev, excerpt: e.target.value }))}
                        placeholder="Brief description of the blog post..."
                        className="mt-1"
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="content">Content *</Label>
                      <Textarea
                        id="content"
                        value={form.content}
                        onChange={(e) => handleContentChange(e.target.value)}
                        placeholder="Write your blog content here... (HTML supported)"
                        className="mt-1 min-h-[400px]"
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        Estimated reading time: {form.reading_time} minutes
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* SEO Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle>SEO Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="seo-title">SEO Title</Label>
                      <Input
                        id="seo-title"
                        value={form.seo_title}
                        onChange={(e) => setForm(prev => ({ ...prev, seo_title: e.target.value }))}
                        placeholder="SEO optimized title..."
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="seo-description">SEO Description</Label>
                      <Textarea
                        id="seo-description"
                        value={form.seo_description}
                        onChange={(e) => setForm(prev => ({ ...prev, seo_description: e.target.value }))}
                        placeholder="SEO meta description..."
                        className="mt-1"
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select value={form.category_id} onValueChange={(value) => setForm(prev => ({ ...prev, category_id: value }))}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                              <div className="flex items-center gap-2">
                                <div 
                                  className="w-3 h-3 rounded-full" 
                                  style={{ backgroundColor: category.color }}
                                />
                                {category.name}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="featured">Featured Post</Label>
                      <Switch
                        id="featured"
                        checked={form.is_featured}
                        onCheckedChange={(checked) => setForm(prev => ({ ...prev, is_featured: checked }))}
                      />
                    </div>

                    <div>
                      <Label htmlFor="reading-time">Reading Time (minutes)</Label>
                      <Input
                        id="reading-time"
                        type="number"
                        value={form.reading_time}
                        onChange={(e) => setForm(prev => ({ ...prev, reading_time: parseInt(e.target.value) || 1 }))}
                        min={1}
                        className="mt-1"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Featured Image</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <Label htmlFor="featured-image">Image URL</Label>
                      <Input
                        id="featured-image"
                        value={form.featured_image_url}
                        onChange={(e) => setForm(prev => ({ ...prev, featured_image_url: e.target.value }))}
                        placeholder="https://example.com/image.jpg"
                        className="mt-1"
                      />
                    </div>
                    
                    {form.featured_image_url && (
                      <div className="mt-4">
                        <img
                          src={form.featured_image_url}
                          alt="Featured"
                          className="w-full h-32 object-cover rounded-lg"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge 
                      variant={form.status === 'published' ? 'default' : 'secondary'}
                      className={form.status === 'published' ? 'bg-green-500' : 'bg-yellow-500'}
                    >
                      {form.status === 'published' ? 'Published' : 'Draft'}
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogEditor; 