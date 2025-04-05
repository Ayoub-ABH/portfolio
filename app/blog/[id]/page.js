'use client';

import React from 'react';
import BlogPost from '@/components/BlogPost';
import { useParams } from 'next/navigation';
import { blogPosts } from '@/data/blogData'; 

export default function BlogPostPage() {
  const params = useParams();
  const id = parseInt(params.id);
  
  
  const post = blogPosts.find(post => post.id === id);
  
  return <BlogPost post={post} />;
}