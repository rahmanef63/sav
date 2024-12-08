import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Principal Designer',
    image: '/team/member1.jpg'
  },
  {
    name: 'Jane Smith',
    role: 'Senior Interior Designer',
    image: '/team/member2.jpg'
  },
  // Add more team members here
]

const Team = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Tim Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="aspect-square relative rounded-full overflow-hidden mb-4">
                  {/* Add image here */}
                </div>
                <h3 className="text-xl font-semibold text-center">{member.name}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
