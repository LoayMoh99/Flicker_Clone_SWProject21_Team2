const photoModel=require('../../../src/models/photo.model')

describe('validatePhoto', () => {
    it('it should return on object with error value set to true if values entered are not valid',  () => {
        // create fake object to validate
        photo={
            title:null,
            description:"3432",
            privacy:'geg',
            tags:['fun','adventure'],
            comments:['sooo prettyyy']
        }

        const result=photoModel.validatePhoto(photo);
        expect(result.error).toBeTruthy();

    });
    it('it should return on object with error value set to null if values entered are valid',  () => {
        // create fake object to validate
        photo={
            title:null,
            description:"3432",
            privacy:'public',
            tags:['fun','adventure'],
            comments:['sooo prettyyy']
        }

        const result=photoModel.validatePhoto(photo);
        expect(result.error).toBeFalsy();

    });
});
describe('validateComment', () => {
    it('it should return on object with error value set to true if theres no comment',  () => {
        // create fake object to validate
        comment={
        }

        const result=photoModel.validateComment(comment);
        expect(result.error).toBeTruthy();

    });
    it('it should return on object with error value set to null if a valid comment is sent',  () => {
        // create fake object to validate
        comment={
            comment:'sooo prettyyy'
        }

        const result=photoModel.validateComment(comment);
        expect(result.error).toBeFalsy();

    });
});

describe('validateId', () => {
    it('it should return on object with error value set to true if theres no comment',  () => {
        // create fake object to validate
        idObject={
            id:353543
        }

        const result=photoModel.validateId(idObject);
        expect(result.error).toBeTruthy();

    });
    it('it should return on object with error value set to null if a valid comment is sent',  () => {
        // create fake object to validate
        idObject={
            id:'608f4985490a9381560f77e1'
        }

        const result=photoModel.validateId(idObject);
        expect(result.error).toBeFalsy();

    });
});