import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {  } from "lucide-react";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  timeAgo: string;
  text: string;
  helpful: number;
}

interface FacebookReviewsProps {
  reviews?: Review[];
  overallRating?: number;
  totalReviews?: number;
  title?: string;
  subtitle?: string;
  theme?: 'light' | 'dark';
  showViewAllButton?: boolean;
}

interface StarRatingProps {
  rating: number;
  theme?: 'light' | 'dark';
}

const defaultReviews: Review[] = [
  {
    id: 1,
    name: "Mel Mbitz",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
    timeAgo: "August 2024",
    text: "Great first session. Ethan was super friendly and approachable. He got me through an hour long first session with a mix of motivation and humour. I felt challenged and supported. Will definitely be going back!",
    helpful: 12
  },
  {
    id: 2,
    name: "Liza Gordon",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
    timeAgo: "November 2024",
    text: "My daughter and I both go to WTF, PT Ethan. After a long hard day, Ethan is that enthusiastic person who motivates us in a good intense workout and assist us in hitting our fitness goals. Due to our busy schedule Ethan has also proven his flexibility. I would recommend WTF PT to anyone.",
    helpful: 8
  },
  {
    id: 3,
    name: "Jasmine Vitagliano",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
    timeAgo: "November 2024",
    text: "Ethan has been training me twice a week since May this year and with a busy work schedule like mine, doing late nights is very convenient for me. I’ve seen a few PT’s over the years but this is the longest that I have stayed with the one. He’s motivating and pushes me in every session which is exactly what I need and was looking for. I have noticed how much stronger I am and how much more I am able to do in each session compared to when I first started. There is no way I would be able to achieve what I have so far on my own. Can’t recommend enough!",
    helpful: 15
  }
];

const StarRating: React.FC<StarRatingProps> = ({ rating, theme = 'light' }) => {
  return (
    
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating 
              ? "fill-yellow-400 text-yellow-400" 
              : theme === 'dark' ? "text-gray-600" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const FacebookReviews: React.FC<FacebookReviewsProps> = ({
  reviews = defaultReviews,
  overallRating = 5.0,
  totalReviews = 100,
  title = "Facebook Reviews",
  subtitle = "See what our clients say about training with us.",
  theme = 'dark',
  showViewAllButton = false
}) => {
    
  const themeClasses = {
    light: {
      section: "bg-white",
      title: "text-gray-900",
      subtitle: "text-gray-600",
      rating: "text-gray-900",
      ratingText: "text-gray-600",
      card: "bg-gray-50 border-gray-200",
      cardText: "text-gray-700",
      name: "text-gray-900",
      time: "text-gray-500",
      border: "border-gray-200",
      helpful: "text-gray-500 hover:text-gray-700",
      button: "bg-blue-600 hover:bg-blue-700 text-white"
    },
    dark: {
      section: "bg-black",
      title: "text-white",
      subtitle: "text-gray-300",
      rating: "text-white",
      ratingText: "text-gray-300",
      card: "bg-gray-800/50 border-gray-700",
      cardText: "text-gray-300",
      name: "text-white",
      time: "text-gray-400",
      border: "border-gray-700",
      helpful: "text-gray-400 hover:text-gray-300",
      button: "bg-blue-600 hover:bg-blue-700 text-white"
    }
  };
 
  const styles = themeClasses[theme];

  return (
    <section className={`${styles.section} pt-10 lg:pt-24 pb-24 sm:pb-32 relative`}>
      
        <div className="tag-wrap">
            <span className="tag-sm">
            </span>
            <span className="tag">
                10+ Years Of Experience
            </span>
        </div>

        <Image
          alt="Personal Training Programs"
          src="/images/curls.jpg"
          fill
          className="absolute inset-0 size-full object-cover opacity-10 [mask-image:linear-gradient(to_top,black_70%,transparent_100%)]"
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pb-30 pt-10 md:pt-25 space-y-6 z-[10]">
        <div>
            <h1 className="red-h-text">
                Weight Training Fitness
            </h1>
            <div className="mt-6 para-text">
                At Weight Training Fitness, I provide personalised training programs designed to help you reach your fitness goals safely and effectively. Whether your focus is building strength, losing fat, improving athletic performance, or boosting overall wellness, I offer one-on-one coaching that adapts to your individual needs. Every session is tailored to you, ensuring consistent progress and support every step of the way.
            </div>
        </div>
        
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        
        <div className="mx-auto max-w-2xl text-center">
        <div className="relative w-full h-90">
        <Image
            src="/images/personal-trainer.png"
            alt="Personal Trainer"
            fill
            className="object-cover scale-105 translate-y-4 [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
        />
        </div>


          <div className="flex items-center justify-center gap-3">
          <Image
                src="/images/facebook-logo.webp"
                alt="Facebook"
                width={62}
                height={62}
                className="w-13 h-13"
                />
            <h2 className={`text-3xl font-bold tracking-tight ${styles.title} sm:text-4xl`}>
              {title}
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4 z-20">
            <StarRating rating={5} theme={theme} />
            <span className={styles.ratingText}> <strong>{overallRating}</strong> out of 5 based on {totalReviews}+ reviews</span>
          </div>
          
          <p className={`text-lg ${styles.subtitle} mb-12`}>
            {subtitle}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.id} className={`${styles.card} rounded-lg p-6 shadow-sm border`}>
            <a href="https://www.facebook.com/share/1FX5EJFCdt/?mibextid=wwXIfr">
              <div className="flex items-start gap-4">
              <Image
                src={review.avatar}
                alt={review.name}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
                />
                                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`font-semibold ${styles.name}`}>{review.name}</h3>
                    <span className={`text-sm ${styles.time}`}>{review.timeAgo}</span>
                  </div>
                  <StarRating rating={review.rating} theme={theme} />
                </div>
              </div>
              
              <p className={`mt-4 ${styles.cardText} leading-relaxed line-clamp-4`}>{review.text}</p>
              
              <div className={`mt-4 pt-4 border-t ${styles.border}`}>
                <div className={`text-sm ${styles.helpful} flex items-center gap-1 transition-colors`}>
                  <span>💬</span>
                  <span>Comments ({review.helpful})</span>
                </div>
              </div>
              </a>
            </div>
          ))}
        </div>

        {showViewAllButton && (
          <div className="mt-12 text-center">
            <Link href='https://www.facebook.com/share/1FX5EJFCdt/?mibextid=wwXIfr' className={`inline-flex items-center gap-2 px-6 py-3 ${styles.button} font-semibold rounded-lg transition-colors`}>
            <Image
                src="/images/facebook-logo.webp"
                alt="Facebook Reviews"
                width={40}
                height={40}
                className="w-10 h-10"
            />
              View All Reviews on Facebook
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FacebookReviews;
export type { FacebookReviewsProps, Review };