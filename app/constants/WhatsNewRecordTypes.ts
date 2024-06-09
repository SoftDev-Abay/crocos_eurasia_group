// /whats-new/records/{id}
// {
//     "data": {
//       "id": 1,
//       "title": null,
//       "image": "http://localhost/storage/whats-new/August2022/7hLo3FBYhxLjeBwPkfyrA9uJ06IDqn-metaaW1hZ2UgOC5wbmc=-.png",
//       "description": null,
//       "created_at": "18.08.2022"
//     }
//   }

// /whats-new/records
// {
//     "data": [
//       {
//         "id": 1,
//         "title": null,
//         "image": "http://localhost/storage/whats-new/August2022/7hLo3FBYhxLjeBwPkfyrA9uJ06IDqn-metaaW1hZ2UgOC5wbmc=-.png",
//         "description": null,
//         "created_at": "18.08.2022"
//       }
//     ],
//     "links": {
//       "first": "http://localhost/api/v1/whats-new/records?page=1",
//       "last": "http://localhost/api/v1/whats-new/records?page=1",
//       "prev": "string",
//       "next": "string"
//     },
//     "meta": {
//       "current_page": 1,
//       "from": 1,
//       "last_page": 1,
//       "links": [
//         {
//           "url": "string",
//           "label": "pagination.previous",
//           "active": true
//         }
//       ],
//       "path": "http://localhost/api/v1/whats-new/records",
//       "per_page": 9,
//       "to": 1,
//       "total": 1
//     }
//   }

interface WhatsNewRecord {
  id: number;
  title: string | null;
  image: string;
  description: string | null;
  created_at: string;
}

interface WhatsNewRecordsResponse {
  data: WhatsNewRecord[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    links: {
      url: string;
      label: string;
      active: boolean;
    }[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
}

export type { WhatsNewRecord, WhatsNewRecordsResponse };
