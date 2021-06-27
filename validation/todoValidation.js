const { check } = require('express-validator');
exports.createTodoValidator = () => {
    return [
        check('name').notEmpty().withMessage('name or email is required'),
        check('description').notEmpty().withMessage('description is required'),
        check('time').notEmpty().withMessage('time is required'),
        check('status').notEmpty().withMessage('status is required')
    ]
}
exports.updateTodoValidator = () => {
    return [
        check('name').notEmpty().withMessage('name or email is required'),
        check('description').notEmpty().withMessage('description is required'),
        check('time').notEmpty().withMessage('time is required'),
        check('status').notEmpty().withMessage('status is required')
    ]
}