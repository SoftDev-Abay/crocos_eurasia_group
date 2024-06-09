//  main
// {
//     "data": {
//       "title": "Наша миссия",
//       "image": "http://localhost/storage/our-missions/082022/XFn4TwuWriMi6fo72Brl4YMrJqdcGW-metaaW1hZ2UgOC5wbmc=-.png",
//       "description": "<p>Мы кормим мир помогая фермерам внедрять и применять инновационные решения для развития сельского хозяйства и производства продукции наивысшего качества</p>"
//     }
//   }

// values

// {
//     "data": [
//       {
//         "id": 1,
//         "title": "asdf",
//         "subtitle": "asdf",
//         "icon": "our-missions/August2022/ZzhjWmyDeH0frTLHZXXMcefP1EZUIx-metaaW1hZ2UgOC5wbmc=-.png",
//         "created_at": "2022-08-18T12:50:57.000000Z",
//         "updated_at": "2022-08-18T12:50:57.000000Z"
//       }
//     ]
//   }

interface MissionsMain {
  title: string;
  image: string;
  description: string;
}

interface MissionsValue {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  created_at: string;
  updated_at: string;
}

export type { MissionsMain, MissionsValue };
