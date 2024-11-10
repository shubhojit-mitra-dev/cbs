'use client'

import { useState } from 'react'
import { Card, CardContent } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { Twitter, Linkedin, AtSign, Copy, CheckCircle2 } from 'lucide-react'

interface GeneratedContent {
  id: string
  content: string
  platforms: ('twitter' | 'linkedin' | 'threads')[]
}

type Platform = 'twitter' | 'linkedin' | 'threads'

export default function PreviewPost() {
  const [selectedPlatforms, setSelectedPlatforms] = useState<{ [key: string]: Platform }>({
    '1': 'twitter',
    '2': 'linkedin',
    '3': 'threads'
  })
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({
    '1': false,
    '2': false,
    '3': false
  })

  // Simulated AI-generated content
  const generatedContents: GeneratedContent[] = [
    {
      id: '1',
      content: "Just published a new blog post on 'The Future of AI in Web Development'. Check it out to learn how AI is revolutionizing the way we build websites and applications!",
      platforms: ['twitter', 'linkedin', 'threads']
    },
    {
      id: '2',
      content: "Excited to share my latest article! I dive deep into the impact of artificial intelligence on web development, exploring current trends and future possibilities. What are your thoughts on AI's role in shaping the future of web technologies?",
      platforms: ['linkedin', 'threads']
    },
    {
      id: '3',
      content: "New blog post alert! 🚀 'The Future of AI in Web Development' - From smart coding assistants to AI-driven design, the web dev landscape is evolving. Read more on my blog!",
      platforms: ['twitter', 'threads']
    }
  ]

  const handleCopy = (id: string) => {
    const content = generatedContents.find(c => c.id === id)?.content
    if (content) {
      navigator.clipboard.writeText(content)
      setCopiedStates(prev => ({ ...prev, [id]: true }))
      setTimeout(() => setCopiedStates(prev => ({ ...prev, [id]: false })), 2000)
    }
  }

  const getPlatformIcon = (platform: Platform) => {
    switch (platform) {
      case 'twitter':
        return <Twitter className="h-5 w-5 text-blue-400" />
      case 'linkedin':
        return <Linkedin className="h-5 w-5 text-blue-700" />
      case 'threads':
        return <AtSign className="h-5 w-5 text-black" />
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Preview Generated Content</h2>
      {generatedContents.map((content) => (
        <Card key={content.id} className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder-avatar.png" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Your Name</p>
                    <p className="text-sm text-gray-500">@yourusername</p>
                  </div>
                  {/* {getPlatformIcon(selectedPlatforms[content.id])} */}
                </div>
                <p className="mt-2 text-gray-800">{content.content}</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              {/* <Select 
                onValueChange={(value: Platform) => setSelectedPlatforms(prev => ({ ...prev, [content.id]: value }))} 
                value={selectedPlatforms[content.id]}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  {content.platforms.map((platform) => (
                    <SelectItem key={platform} value={platform}>
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select> */}
              <div className="space-x-2">
                <Button variant="outline" onClick={() => handleCopy(content.id)}>
                  {copiedStates[content.id] ? <CheckCircle2 className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                  {copiedStates[content.id] ? 'Copied' : 'Copy'}
                </Button>
                {/* <Button>Post to {selectedPlatforms[content.id].charAt(0).toUpperCase() + selectedPlatforms[content.id].slice(1)}</Button> */}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}