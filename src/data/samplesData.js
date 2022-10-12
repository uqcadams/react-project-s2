export const samplesData = [
  {
    id: "1",
    title: "Hellz Wind Staff",
    time: "6:40pm on 25 August 2022",
    ingredients: [
      { item: "UQ Sports Courts, UQ", active: 0 },
      { item: "UQU Shops, UQ", active: 0 },
      { item: "Near UQ Lakes Station, UQ", active: 0 },
      { item: "General Purpose South, UQ", active: 0 },
      { item: "Great Court, UQ", active: 0 },
    ],
  },
  {
    id: "2",
    title: "C.R.E.A.M",
    time: "7:40pm on 25 August 2022",
    ingredients: [
      { item: "UQ Sports Courts, UQ", active: 1 },
      { item: "UQU Shops, UQ", active: 1 },
      { item: "Near UQ Lakes Station, UQ", active: 0 },
      { item: "General Purpose South, UQ", active: 1 },
      { item: "Great Court, UQ", active: 0 },
    ],
  },
  {
    id: "3",
    title: "A Better Tomorrow",
    time: "8:40pm on 25 August 2022",
    ingredients: [
      { item: "UQ Sports Courts, UQ", active: 0 },
      { item: "UQU Shops, UQ", active: 0 },
      { item: "Near UQ Lakes Station, UQ", active: 0 },
      { item: "General Purpose South, UQ", active: 0 },
      { item: "Great Court, UQ", active: 0 },
    ],
  },
];

const example = {
  samples: [
    {
      id: "3046",
      api_key: "aJQ44fo5",
      datetime: "2022-10-11 15:40:22",
      type: "guitar",
      recording_data:
        '{"sampleData":{"C":[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],"D":[false,true,false,false,false,false,true,false,false,false,false,false,false,false,true,false],"E":[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],"F":[false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false],"G":[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],"A":[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],"B":[false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false]}}',
      name: "Hellz Wind Staff",
    },
    {
      id: "3045",
      api_key: "aJQ44fo5",
      datetime: "2022-10-11 15:37:20",
      type: "guitar",
      recording_data:
        '{"sampleData":{"C":[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],"D":[false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false],"E":[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],"F":[false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false],"G":[false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false],"A":[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],"B":[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]}}',
      name: "",
    },
    {
      id: "3044",
      api_key: "aJQ44fo5",
      datetime: "2022-10-11 15:36:11",
      type: "guitar",
      recording_data:
        '{"sampleData":{"C":[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],"D":[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],"E":[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],"F":[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],"G":[false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false],"A":[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],"B":[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]}}',
      name: "",
    },
  ],
  success: ["Read (live data) successful for `samples` endpoint."],
  sql: "SELECT * FROM `samples` WHERE `api_key` = 'aJQ44fo5' ORDER BY `id` DESC LIMIT 9999;",
  apiAssociation: "API connection associated with: Hannah Hinckfuss (aJQ44fo5).",
  url: { apiKey: "aJQ44fo5", mode: "read", endpoint: "samples" },
};
