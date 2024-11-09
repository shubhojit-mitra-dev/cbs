'use client'

import { useState } from 'react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

export default function AddHashnodeAccount() {
  const [blogName, setBlogName] = useState('')
  const [blogUrl, setBlogUrl] = useState('')
  const [webhookSecret, setWebhookSecret] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted', { blogName, blogUrl, webhookSecret })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Link your Hashnode Account</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Instructions</CardTitle>
          <CardDescription>Follow these steps to create a webhook on Hashnode:</CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li>Go to your Hashnode account</li>
            <li>Navigate to your blog settings</li>
            <li>Find and click on the &quot;Webhooks&quot; section</li>
            <li>Click on &quot;Create a new webhook&quot;</li>
            <li>Enter the following URL as your webhook endpoint:
              <code className="ml-2 p-1 bg-gray-100 rounded">https://your-platform.com/api/hashnode-webhook</code>
            </li>
            <li>Select the &quot;post_published&quot; event</li>
            <li>Copy the generated webhook secret</li>
          </ol>
        </CardContent>
      </Card>

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