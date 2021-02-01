import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import { Container, Curriculum, Technologies } from '../styles/pages/Portfolio'
import Technologie from '../components/Technologie'

import { useFetch } from '../hooks/useFetch'

const Portfolio: NextPage = () => {
  const { data } = useFetch('/users/pedroviskov1234/repos')
  return (
    <Container>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Curriculum>
        <h1>Experiência</h1>
        <p>
          <b>Curso:</b> Cursanso Técnico Integrado em Informática na UTFPR -
          formação em 2022
        </p>
        <p>
          <b>Estágio:</b> Desenvolvimento Fullstack na plataforma Trucker do
          Agro
        </p>
        <h1>Projetos no GitHub</h1>
      </Curriculum>
      <Technologies>
        {data &&
          data.map(repos => {
            return (
              <Technologie
                key={repos.id}
                name={repos.name}
                description={repos.description}
                url={repos.html_url}
              />
            )
          })}
      </Technologies>
    </Container>
  )
}

export default Portfolio
