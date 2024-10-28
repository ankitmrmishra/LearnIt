import { Card, CardContent, CardHeader, CardTitle } from "./card";
import {
  Book,
  Users,
  UserCheck,
  ClipboardList,
  Monitor,
  MessageCircle,
  BarChart2,
  Award,
  LucideIcon,
} from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
}

export interface FeaturesSectionProps {
  examName: string;
  features: Feature[];
}

const iconMap: { [key: string]: LucideIcon } = {
  Book,
  Users,
  UserCheck,
  ClipboardList,
  Monitor,
  MessageCircle,
  BarChart2,
  Award,
};

export function FeaturesSection({ examName, features }: FeaturesSectionProps) {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Our {examName} Coaching?
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Book;
            return (
              <Card key={index} className="">
                <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                  <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
