const graphql = require('graphql');
const { GraphQLNonNull,GraphQLObjectType, GraphQLID, GraphQLList, GraphQLString} = graphql;


const User = require('../models/user.model');
const Project = require('../models/project.model');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      async resolve(parent) {
        return User.find({});
      }
    },
    user: {
      type: UserType,
      async resolve(parent, args) {
        return User.findById(data.id);
      }
    },
    project: {
      type: ProjectType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      async resolve(parent, args) {
        return Project.findById(args.id);
      }
    },
    userId: {
      type: UserType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      async resolve(parent, args) {
        return User.findById(args.id);
      }
    },

    userProjects: {
      type: UserType,
      args: {
        name : {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      async resolve(parent, args,) {
        let user = new User({
          name: args.name,
        });
        return User.findOne({"name" : args.name})
    }},

    projects: {
      type: new GraphQLList(ProjectType),
      async resolve(parent, args, info) {
        return Project.find({})
      }
    },
    
  }
});

module.exports = RootQuery