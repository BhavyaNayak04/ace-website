import { commentBlog, createBlog, editBlog, likeBlog } from './blog';
import { createTeam } from './teams';
import { editProfile } from './profile';

export const server = {
  createBlog,
  editBlog,
  editProfile,
  likeBlog,
  commentBlog,
  createTeam,
};
