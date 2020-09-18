import { assert, expect } from 'chai'
import { create, patch } from '../../utils/request'
import Store from '../../utils/store'

export default function (app) {
  return () => {
    describe(`Créations des drapeaux\n`, async () => {
      it(`On doit passer le pays sinon ça retourne une erreur`, async () => {
        try {
          await create({
            url: 'flags',
            data: {},
          })

          expect(true).to.equal(false)
        } catch (error) {
          const { body } = error.response

          expect(body.code).to.equal(400)
          expect(body.message).to.equal(`Il faut un pays !`)
        }
      })

      it(`Lors de la création, le drapeau est retourné`, async () => {
        try {
          const flag = await create({
            url: 'flags',
            data: {
              country: 'Brésil',
            },
          })

          expect(flag.continent).to.equal('Amérique du Sud')
          expect(flag.flag).to.equal('🇧🇷')
          expect(flag.country).to.equal('Brésil')
        } catch (error) {
          // console.log(error)
          expect(false).to.equal(error)
        }
      })
    })
  }
}
