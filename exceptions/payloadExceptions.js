class IncomingS3EventNotFound extends Error {
    constructor(message) {
        super(message)

        // Saving class name in the property of our custom error as a shortcut.
        this.name = this.constructor.name

        // Capturing stack trace, excluding constructor call from it.
        Error.captureStackTrace(this, this.constructor)
        this.status = 404
    }
}

class RekoNotFoundExcpetion extends Error {
    constructor(message) {
        super(message)

        // Saving class name in the property of our custom error as a shortcut.
        this.name = this.constructor.name

        // Capturing stack trace, excluding constructor call from it.
        Error.captureStackTrace(this, this.constructor)
        this.status = 400
    }
}

class MissingPaylodException extends Error {
    constructor(message) {
        super(message)

        // Saving class name in the property of our custom error as a shortcut.
        this.name = this.constructor.name

        // Capturing stack trace, excluding constructor call from it.
        Error.captureStackTrace(this, this.constructor)
        this.status = 400
    }
}

module.exports = {
    IncomingS3EventNotFound,
    RekoNotFoundExcpetion,
    MissingPaylodException
}