export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'offers',
      title: 'Offers',
      type:'array',
      of: [
        {
          name:'offer',
          title:'Offer',
          type:'string'
        }
      ]
    },
  ],
};
