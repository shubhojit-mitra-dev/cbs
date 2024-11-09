'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { ArrowRight, Plus, Edit, Trash2 } from 'lucide-react'

interface Post {
  id: string
  title: string
  blog: string
  date: string
}

interface Blog {
  id: string
  name: string
  url: string
}

interface QueueItem {
  id: string
  title: string
  status: 'draft' | 'scheduled' | 'processing'
}

export default function DashboardOverview() {
  const [recentPosts, setRecentPosts] = useState<Post[]>([
    { id: '1', title: 'Introduction to Next.js 13', blog: 'My Tech Blog', date: '2023-05-15' },
    { id: '2', title: 'Mastering Tailwind CSS', blog: 'CSS Wizardry', date: '2023-05-14' },
    { id: '3', title: 'The Power of TypeScript', blog: 'TypeScript Tales', date: '2023-05-13' },
  ])

  const [recentBlogs, setRecentBlogs] = useState<Blog[]>([
    { id: '1', name: 'My Tech Blog', url: 'https://mytechblog.hashnode.dev' },
    { id: '2', name: 'CSS Wizardry', url: 'https://csswizardry.hashnode.dev' },
  ])

  const [queueItems, setQueueItems] = useState<QueueItem[]>([
    { id: '1', title: 'React 18 New Features', status: 'draft' },
    { id: '2', title: 'Building a Design System', status: 'scheduled' },
    { id: '3', title: 'GraphQL vs REST', status: 'processing' },
  ])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {recentPosts.map((post) => (
                <li key={post.id} className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{post.title}</h3>
                    <p className="text-sm text-gray-500">{post.blog} • {post.date}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ArrowRight className="h-4 w-4" />
                    <span className="sr-only">View post</span>
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recently Added Blogs</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {recentBlogs.map((blog) => (
                <li key={blog.id} className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{blog.name}</h3>
                    <p className="text-sm text-gray-500">{blog.url}</p>
                  </div>
                  <Link href={blog.url} passHref>
                    <Button variant="outline" size="sm">Visit</Button>
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content Queue</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {queueItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <Badge variant={item.status === 'draft' ? 'secondary' : item.status === 'scheduled' ? 'outline' : 'default'}>
                      {item.status}
                    </Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" /> New Post
              </Button>
              <Button className="w-full" variant="outline" asChild>
                <Link href="dashboard/my-blogs/add">
                  <Plus className="mr-2 h-4 w-4" /> Add Blog
                </Link>
              </Button>
              <Button className="w-full" variant="secondary">
                View Analytics
              </Button>
              <Button className="w-full" variant="secondary">
                Manage Queue
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}