import Link from 'next/link'
import { PlusIcon } from 'lucide-react'
import { Card, CardContent } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import hashnodeLogo from "~/assets/hashnode.svg"
import Image from 'next/image'
import { api } from '~/trpc/server'

interface Blog {
  id: string
  name: string
  url: string
}

export default async function MyBlogs() {
  // This would typically come from an API or state management
  // const blogs: Blog[] = [
  //   { id: "1", name: "My Tech Blog", url: "https://mytechblog.hashnode.dev" },
  //   { id: "2", name: "Web Dev Insights", url: "https://webdevinsights.hashnode.dev" },
  // ]

  const blogs = await api.blogs.listBlogs()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Blogs</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/dashboard/my-blogs/add" passHref>
          <Card className="flex items-center justify-center h-48 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
            <CardContent className="flex flex-col items-center">
              <PlusIcon className="w-12 h-12 text-gray-400" />
              <span className="mt-2 text-gray-600">Add New Blog</span>
            </CardContent>
          </Card>
        </Link>
        {blogs.map((blog) => (
          <Card key={blog.id} className="h-48">
            <CardContent className="flex flex-col h-full p-4">
              <div className="flex items-center mb-4">
                <Image 
                  src={hashnodeLogo} 
                  alt="Hashnode Logo" 
                  className="w-6 h-6 mr-2"
                />
                <h2 className="text-xl font-semibold">{blog.blogName}</h2>
              </div>
              <p className="text-gray-600 mb-4 flex-grow">{blog.blogUrl}</p>
              <div className="flex justify-between items-center">
                <Link href={blog.blogUrl} passHref>
                  <Button size="sm">Visit Blog</Button>
                </Link>
                {/* <Link href={`/dashboard/content-platforms/${blog.id}`} passHref>
                  <Button variant="ghost" size="sm">Manage</Button>
                </Link> */}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}