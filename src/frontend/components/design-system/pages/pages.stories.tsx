import React from 'react'

import { Box } from '../atoms/box'
import { Navigation, TopBar } from '../templates/template.stories'
import { TableStory } from '../organisms/table.stories'
import { H2 } from '../atoms/header'
import { Badge } from '../atoms/badge'
import { Pagination } from '../organisms/pagination'
import { Text } from '../atoms/text'

export default {
  title: 'Pages',
}

export const ListWithSidebar = () => (
  <Box width="1200px" height="900px" flex>
    <Navigation
      width="300px"
      px="lg"
    />
    <Box flex flexDirection="column" flexGrow={1}>
      <TopBar />
      <Box flexGrow={1} variant="grey">
        <H2 mb="lg">
          Adding New Car
          <Badge variant="primary" size="sm" ml="lg">Draft</Badge>
        </H2>
        <Box variant="white">
          <TableStory />
          <Box mt="xxl">
            <Text textAlign="center">
              <Pagination page={3} perPage={4} total={214} onChange={() => { console.log('clicked') }} />
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
)
