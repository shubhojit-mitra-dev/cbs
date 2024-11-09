import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { api } from '~/trpc/server'
import LinkBlogForm from './_form'

export default async function AddHashnodeAccount() {

  const webhookurl = await api.blogs.generateWebhookUrl()

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
              <code className="ml-2 p-1 bg-gray-100 rounded">{webhookurl}</code>
            </li>
            <li>Select the &quot;post_published&quot; event</li>
            <li>Copy the generated webhook secret</li>
          </ol>
        </CardContent>
      </Card>
      <LinkBlogForm webhookUrl={webhookurl} />

    </div>
  )
}