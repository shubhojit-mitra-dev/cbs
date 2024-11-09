'use client'

import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { api } from '~/trpc/react'

const LinkBlogForm = ({ webhookUrl }: { webhookUrl: string }) => {
  const router = useRouter();

  const [blogName, setBlogName] = useState('')
  const [blogUrl, setBlogUrl] = useState('')
  const [webhookSecret, setWebhookSecret] = useState('')

  const linkBlogMutation = api.blogs.link.useMutation({
    onSuccess: (message) => {
      toast.success(message)
      router.push('/dashboard/my-blogs')
    },
    onError: (err) => {
      toast.error(err.message)
    }
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    linkBlogMutation.mutate({
      blogName,
      blogUrl,
      webhookSecret,
      webhookUrl
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="blogUrl">Blog Name</Label>
          <Input
            id="blogName"
            type="text"
            placeholder="Enter your blog name"
            value={blogName}
            onChange={(e) => setBlogName(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="blogUrl">Hashnode Blog URL</Label>
          <Input
            id="blogUrl"
            type="url"
            placeholder="https://yourblog.hashnode.dev"
            value={blogUrl}
            onChange={(e) => setBlogUrl(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="webhookSecret">Webhook Secret</Label>
          <Input
            id="webhookSecret"
            type="text"
            placeholder="Enter your webhook secret"
            value={webhookSecret}
            onChange={(e) => setWebhookSecret(e.target.value)}
            required
          />
          <p className="text-sm text-gray-500">
            * This is used for verification purposes only. We use it to verify Hashnode as the sender of the request.
          </p>
        </div>

        <Button type="submit" disabled={linkBlogMutation.isPending}>
          {linkBlogMutation.isPending && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
          Link Account</Button>
      </form>
    </div>
  )
}

export default LinkBlogForm