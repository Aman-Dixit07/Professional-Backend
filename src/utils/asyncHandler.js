//we will do it in 2 ways - promise and using try , catch

//promise method

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler()).reject((err) => {
      next(err);
    }); //we can use catch also in place of reject
  };
};

export { asyncHandler };

//try and catch method

// const asyncHandler = (requestHandler) => async (req, res, next) => {
//   try {
//     await requestHandler(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       message: err.message,
//       success: false,
//     });
//   }
// };
