import React, { Component } from 'react'
var ReactDOM = require('react-dom')

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import Footer from './footer.jsx'
import FixedMenu from './FixedMenu.jsx'
import ApiDemoModal from './ApiDemoModal.jsx'

export default class HomepageLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.hideFixedMenu = this.hideFixedMenu.bind(this)
    this.showFixedMenu = this.showFixedMenu.bind(this)
  }

  hideFixedMenu() {
    this.setState({ visible: false })
  }

  showFixedMenu() {
    this.setState({ visible: true })
  }

  render() {
    const { visible } = this.state

    return (
      <div>
        { visible ? <FixedMenu /> : null }

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign='center'
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <a className='item active' href='/' key='1'>首頁</a>
                <a className='item' href='/api' key='2'>API</a>
                <Menu.Item as='a'>延伸服務</Menu.Item>
                <Menu.Item as='a'>實驗室成員 </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted>Log in</Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
        </Visibility>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <ApiDemoModal name='KCM' intro='一個會返回相關字的API' picture='https://image.flaticon.com/icons/svg/204/204358.svg' descript='輸入想查的單字'/>

            <Header as='h3' style={{ fontSize: '2em' }}>研究目標</Header>
            <p style={{ fontSize: '1.33em' }}>
            我們以資料工程技術為出發點考慮各式不一樣應用環境中所產生的資料進行該類型資料之查詢處理與探勘。而就近期研究規劃目標而言，我們規劃三近程研究目標：(1)社群媒體輿情分析(Social Media Analysis)，(2)行動裝置使用者行為探勘(Mobile Data Analysis)，(3)平行與分散式資料處理架構(Parallel and Distributed Data Processing)。而就遠程研究重心而言，我們將仍以資料工程知識為核心，配合於各式現有資通平台上所累積之資料分析與查詢處理經驗，朝向未來可預見之更多樣化之平台與資料類型資料管理應用發展
            </p>
            <Button as='a' size='large'>Read More</Button>
            <ApiDemoModal name='KCM'/>
          </Container>
        </Segment>

        <Footer/>
      </div>
    )
  }
}

ReactDOM.render(<HomepageLayout />, document.getElementById('app'))
