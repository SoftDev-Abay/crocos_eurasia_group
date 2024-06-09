// digits
// {
//     "data": [
//       {
//         "id": 1,
//         "title": "asdf",
//         "subtitle": "asdf",
//         "created_at": "2022-08-18T12:49:40.000000Z",
//         "updated_at": "2022-08-18T12:49:40.000000Z"
//       }
//     ]
//   }

// unique-solutions
// {
//     "data": [
//       {
//         "id": 1,
//         "title": "24",
//         "subtitle": "года на рынке",
//         "created_at": "2022-08-18T11:00:53.000000Z",
//         "updated_at": "2022-08-18T11:00:53.000000Z"
//       }
//     ]
//   }

// main
// {
//     "data": {
//       "title": "Eurasia Group",
//       "image": "http://localhost/storage/about-companies/082022/CDCWVWY8Yst4ZR2tnBu1B51LWuvGTz-metaaW1hZ2UgOC5wbmc=-.png",
//       "description": "<p>Сегодня мы — единственная компания на казахстанском сельскохозяйственном рынке которая уже более 20-ти лет с гордостью представляет лучшую технику от мировых лидеров таких как:</p><ul><li>John Deere (США)</li><li>Lindsay Irrigation (США)</li><li>JCB (Великобритания)</li><li>Grimme (Германия)</li><li>Väderstad (Швеция)</li></ul>"
//     }
//   }

interface AboutCompanyMain {
  title: string;
  image: string;
  description: string;
}

interface AboutCompanyDigit {
  id: number;
  title: string;
  subtitle: string;
  created_at: string;
  updated_at: string;
}

interface AboutCompanySolution {
  id: number;
  title: string;
  subtitle: string;
  created_at: string;
  updated_at: string;
}

export type { AboutCompanyMain, AboutCompanyDigit, AboutCompanySolution };
