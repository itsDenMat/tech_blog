const { Comment } = require('../models');

const commentData = [
    {
        user_id: 2,
        post_id: 6,
        comment_text: "I will own you soon enough!"
    },
    {
        user_id: 4,
        post_id: 1,
        comment_text: "Wow! Excited for the big event."
    },
    {
        user_id: 5,
        post_id: 4,
        comment_text: "That is great! We will follow suit with our devices!"
    },
    {
        user_id: 3,
        post_id: 1,
        comment_text: "This is the most awaited event this year. Fantastic!"
    },
    {
        user_id: 1,
        post_id: 2,
        comment_text: "We will beat you to the moon and mars!"
    },
    {
        user_id: 6,
        post_id: 5,
        comment_text: "Everyone is excited for prime day."
    },
    {
        user_id: 6,
        post_id: 3,
        comment_text: "Can't wait for developers to utilize iOS16."
    },
    {
        user_id: 4,
        post_id: 2,
        comment_text: "Can't wait for the update."
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;