export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields:[
    {
      name:'title',
      title:'Title',
      type:'string'
    },
    {
      name: 'left',
      title: 'Left',
      type:'array',
      of: [
        {
          name: 'skill',
          title: 'Skill',
          type: 'document',
          fields:[
            {
              name: 'name',
              title: 'Name',
              type: 'string'
            },
            {
              name: 'level',
              title: 'Level',
              type: 'string'
            }
          ]
        },
      ]
    },
    {
      name: 'right',
      title: 'Right',
      type: 'array',
      of: [
        {
          name: 'skill',
          title: 'Skill',
          type: 'document',
          fields:[
            {
              name: 'name',
              title: 'Name',
              type: 'string'
            },
            {
              name: 'level',
              title: 'Level',
              type: 'string'
            }
          ]
        },
      ]
    },
  ]
}
