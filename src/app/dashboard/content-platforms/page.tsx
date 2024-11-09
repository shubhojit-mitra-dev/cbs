import { Button } from "~/components/ui/button"
import { PlusIcon } from "lucide-react"

interface Platform {
  id: string
  name: string
  url: string
  type: string
}

export default function ContentPlatforms() {
  // This would typically come from an API or state management
  const platforms: Platform[] = [
    { id: "1", name: "YouTube", url: "https://youtube.com", type: "Video" },
    { id: "2", name: "Medium", url: "https://medium.com", type: "Blog" },
    { id: "3", name: "Spotify", url: "https://spotify.com", type: "Podcast" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Content Platforms</h1>
        <Button size="lg">
          <PlusIcon className="mr-2 h-4 w-4" /> Add
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="pb-2 font-semibold">Name</th>
              <th className="pb-2 font-semibold">URL</th>
              <th className="pb-2 font-semibold">Type</th>
            </tr>
          </thead>
          <tbody>
            {platforms.map((platform) => (
              <tr key={platform.id} className="border-b last:border-b-0">
                <td className="py-4">{platform.name}</td>
                <td className="py-4">
                  <a href={platform.url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    {platform.url}
                  </a>
                </td>
                <td className="py-4">{platform.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}