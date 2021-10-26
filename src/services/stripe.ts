import Stripe from 'stripe'
// import { version } from '../../package.json'

export const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: '2020-08-27',
  appInfo: {
    name: 'Rocketseat-Ignite-ig.news'
  }
})

// VERSÃO DO PROFESSOR NA VÍDEO-AULA
// OBS: O SDK do Stripe gera um warning informando que não é necessário o 'version'
// export const stripe = new Stripe(process.env.STRIPE_API_KEY, {
//   apiVersion: '2020-08-27',
//   appInfo: {
//     name: 'Rocketseat-Ignite-ig.news',
//     version
//   }
// })
