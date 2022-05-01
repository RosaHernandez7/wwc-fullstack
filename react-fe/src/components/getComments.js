 const getComments = async () => {
  return [

    {
            id:"1",
            body:"First comment",
            username:"Maria",
            userId:"1",
            parentId:null,
            createdAt:"2022-04-22"
        },
        {
            id:"2",
            body:"Second comment",
            username:"Julio",
            userId:"2",
            parentId:null,
            createdAt:"2022-04-22"
        },
  ];
   
};

export default getComments;