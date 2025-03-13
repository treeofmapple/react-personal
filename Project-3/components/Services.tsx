"use client"
import { Card } from "@/components/ui/Card"
import { motion } from "framer-motion"
import { servicesInfo } from "@/data/servicesInfo"

const Servicess = () => {

    return (
        <section className="container mx-auto px-4 py-20" id="services">
        <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesInfo.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative p-0.5 bg-gradient-to-br from-purple-600 to-indigo-600">
                <Card className="p-6 text-center h-full transition-all duration-300 hover:shadow-lg cursor-default dark:hover:bg-gray-800 bg-background">
                  <div className="mb-4 flex justify-center text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    )
}

export default Servicess