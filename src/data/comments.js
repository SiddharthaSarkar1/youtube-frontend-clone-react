const commentsData = [
  {
    id: 0,
    comment: "Comment - Lorem Ipsum 1",
    subComments: [
      {
        id: 1,
        comment: "Comment - Lorem Ipsum 2",
        subComments: [],
      },
      {
        id: 2,
        comment: "Comment - Lorem Ipsum 3",
        subComments: [],
      },
      {
        id: 3,
        comment: "Comment - Lorem Ipsum 4",
        subComments: [
          {
            id: 4,
            comment: "Comment - Lorem Ipsum 5",
            subComments: [],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    comment: "Lorem ipsum 6",
    subComments: [],
  },
];

export default commentsData;
