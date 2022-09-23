const { Post } = require('../models');

const postData = [
    {
        title: "GitHub Universe 2022 is back!!! ",
        post_content: "Early bird registration ends on September 30, 2022. Be an early bird. We will see you Live and in-person in San Francisco! This even is broadcasted globally as well!",
        user_id: 6
    },
    {
        title: "To the moon!",
        post_content: "We're taking twitter and dogecoin to the moon!",
        user_id: 2
    },
    {
        title: "iPhone 14 and iOS 16 are all out!",
        post_content: "So excited for our customers to experience the magic of our latest products.",
        user_id: 5

    },
    {
        title: "Privacy is very important!",
        post_content: "Our users privacy is the most important aspect we protect withint our social media products",
        user_id: 3
    },
    {
        title: "Prime Membership",
        post_content: "Go buy more products from our app so I can build better spaceship than Elon Musk!",
        user_id: 1
    },
    {
        title: "We are not budging!",
        post_content: "We want the best for our company, users, and our stakeholders.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;