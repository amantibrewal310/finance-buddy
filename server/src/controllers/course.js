const Course = require('../models/course');

exports.getAllCourses = async (req, res) => {
  const courses = await Course.find({}).populate('author', 'name role');
  if (!courses) {
    return res.status(400).json({
      error: 'No course found'
    });
  }
  res.json(courses);
};
exports.getCourse = async (req, res) => {
  const { courseId } = req.params;
  const course = await Course.findOne({ _id: courseId }).populate(
    'author',
    'name role'
  );
  if (!course) {
    return res.status(400).json({
      error: 'No course found'
    });
  }

  res.json(course);
  console.log('hh');
  res.end();
};
exports.createCourse = async (req, res) => {
  const { title, description, difficulty, domains } = req.body;

  const user = req.profile._id;

  const course = new Course({
    title,
    description,
    difficulty,
    domains,
    author: user
  });

  course.save((err, course) => {
    if (err) {
      return res.status(400).json({
        error: 'Error while saving to DB'
      });
    }
    return res.json(course);
  });
};
exports.updateCourse = async (req, res) => {
  const updatedDetails = req.body;
  const { courseId } = req.params;

  let course = await Course.findOne({ _id: courseId });

  if (!course) {
    return res.status(400).json({
      error: 'Course not found'
    });
  }
  // console.log(course);

  if (course.author._id.toString() != req.profile._id) {
    return res.status(403).json({
      error: 'You are not authorized to update this course'
    });
  }

  Course.findByIdAndUpdate(
    { _id: courseId },
    { $set: updatedDetails },
    { new: true, useFindAndModify: false },
    (err, course) => {
      if (err) {
        return res.status(400).json({
          error: 'Error while updating'
        });
      }
      res.send(course);
    }
  );
};

exports.addVideoToCourse = async (req, res) => {
  const { title, description } = req.body;
  const videoFile = req.files.video;
  const imageFile = req.files.image;

  const videoUrl = 'a';
  const imageUrl = 'a';

  const video = {
    title,
    description,
    videoUrl,
    thumbnail: imageUrl
  };

  const { courseId } = req.params;

  let course = await Course.findOne({ _id: courseId });

  if (!course) {
    return res.status(400).json({
      error: 'Course not found'
    });
  }
  // console.log(course);

  if (course.author._id.toString() != req.profile._id) {
    return res.status(403).json({
      error: 'You are not authorized to update this course'
    });
  }
  console.log(video);

  Course.findByIdAndUpdate(
    { _id: courseId },
    { $push: { videoslist: video } },
    { new: true, useFindAndModify: false },
    (err, course) => {
      if (err) {
        return res.status(400).json({
          error: 'Error while updating'
        });
      }
      res.send(course);
    }
  );
};