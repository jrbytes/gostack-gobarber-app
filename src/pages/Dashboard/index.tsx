import React from 'react'
import { Button } from 'react-native'
import { Container, Text } from './styles'

import { useAuth } from '../../hooks/auth'

const Dashboard: React.FC = () => {
  const { signOut } = useAuth()
  return (
    <Container>
      <Text>Dashboard</Text>
      <Button title="Sair" onPress={signOut} />
    </Container>
  )
}

export default Dashboard
