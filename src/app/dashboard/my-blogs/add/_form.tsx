'use client'

import { useState } from 'react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

const LinkBlogForm = () => {

  const [blogName, setBlogName] = useState('')
  const [blogUrl, setBlogUrl] = useState('')
  const [webhookSecret, setWebhookSecret] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted', { blogName, blogUrl, webhookSecret })
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

        <Button type="submit">Link Account</Button>
      </form>
    </div>
  )
}

export default LinkBlogForm