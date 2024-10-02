"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mic, Camera, MessageSquare, Globe, Zap, Puzzle, Signal, Users, Award, Wifi, WifiOff } from 'lucide-react'

export default function SaarthiPlatform() {
  const [inputMode, setInputMode] = useState<'text' | 'voice' | 'visual'>('text')
  const [userInput, setUserInput] = useState('')
  const [isOnline, setIsOnline] = useState(true)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the input to your AI model for processing
    console.log(`Processing ${inputMode} input:`, userInput)
    setUserInput('')
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Saarthi: Your Gen AI DPI Adoption Companion</h1>
      
      <Tabs defaultValue="interface" className="mb-6">
        <TabsList>
          <TabsTrigger value="interface">Multimodal Interface</TabsTrigger>
          <TabsTrigger value="onboarding">Onboarding</TabsTrigger>
          <TabsTrigger value="awareness">Awareness Hub</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="scalability">Scalability</TabsTrigger>
        </TabsList>
        
        <TabsContent value="interface">
          <Card>
            <CardHeader>
              <CardTitle>Saarthi's Personalized Multimodal Interface</CardTitle>
              <CardDescription>Interact with Saarthi using voice, text, or visual inputs</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex space-x-2">
                  <Button 
                    type="button" 
                    variant={inputMode === 'text' ? 'default' : 'outline'}
                    onClick={() => setInputMode('text')}
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Text
                  </Button>
                  <Button 
                    type="button" 
                    variant={inputMode === 'voice' ? 'default' : 'outline'}
                    onClick={() => setInputMode('voice')}
                  >
                    <Mic className="mr-2 h-4 w-4" />
                    Voice
                  </Button>
                  <Button 
                    type="button" 
                    variant={inputMode === 'visual' ? 'default' : 'outline'}
                    onClick={() => setInputMode('visual')}
                  >
                    <Camera className="mr-2 h-4 w-4" />
                    Visual
                  </Button>
                </div>
                <Input 
                  type="text" 
                  placeholder={`Enter your ${inputMode} input here...`}
                  value={userInput}
                  onChange={handleInputChange}
                />
                <Button type="submit">Ask Saarthi</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="onboarding">
          <Card>
            <CardHeader>
              <CardTitle>Saarthi's Simplified Onboarding & Recommendations</CardTitle>
              <CardDescription>Personalized guidance for new users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">AI-Powered Recommendations</Badge>
                <Badge variant="outline">Step-by-Step Tutorials</Badge>
                <Badge variant="outline">Personalized User Journey</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="awareness">
          <Card>
            <CardHeader>
              <CardTitle>Saarthi's Gamified Awareness Hub</CardTitle>
              <CardDescription>Learn about DPI through interactive experiences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline">
                  <Award className="mr-2 h-4 w-4" />
                  Earn Badges
                </Button>
                <Button variant="outline">
                  <Users className="mr-2 h-4 w-4" />
                  Community Challenges
                </Button>
                <Button variant="outline">
                  <Zap className="mr-2 h-4 w-4" />
                  Quick Quizzes
                </Button>
                <Button variant="outline">
                  <Globe className="mr-2 h-4 w-4" />
                  Global Leaderboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="integrations">
          <Card>
            <CardHeader>
              <CardTitle>Saarthi's Cross Integrations & Interoperability</CardTitle>
              <CardDescription>Seamless connectivity across services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">SMS Integration</Badge>
                <Badge variant="outline">VoLTE Support</Badge>
                <Badge variant="outline">Low Connectivity Solutions</Badge>
                <Badge variant="outline">
                  {isOnline ? (
                    <Wifi className="mr-2 h-4 w-4 inline" />
                  ) : (
                    <WifiOff className="mr-2 h-4 w-4 inline" />
                  )}
                  {isOnline ? 'Online Mode' : 'Offline Mode'}
                </Badge>
                <Button 
                  variant="outline" 
                  onClick={() => setIsOnline(!isOnline)}
                >
                  Toggle Online/Offline
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="scalability">
          <Card>
            <CardHeader>
              <CardTitle>Saarthi's Scalability & Optimization</CardTitle>
              <CardDescription>Adapting to user needs and feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">
                  <Signal className="mr-2 h-4 w-4 inline" />
                  Urban & Rural Optimization
                </Badge>
                <Badge variant="outline">
                  <Puzzle className="mr-2 h-4 w-4 inline" />
                  Adaptive AI Models
                </Badge>
                <p className="text-sm text-muted-foreground mt-4">
                  Saarthi continuously learns from user interactions to improve accessibility and accuracy across diverse settings.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}