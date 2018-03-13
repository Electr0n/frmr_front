import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './icon';

storiesOf('Icon', module)
  .add('General usage', () =>
    <div>
      <b>Available properties: </b>
      <ul>
        <li>Name</li>
        <li>Size</li>
        <li>Colors</li>
      </ul>
      <p>Specify "name" to choose image. By default it will be "default" icon</p>
      <b>Available names:</b>
      <ul>
        <li>login</li>
        <li>default</li>
      </ul>
      <p>Size. By default icon will be 70x70 px. Set "full" size to stretch icon by 100% of parent size.</p>
      <b>Available sizes:</b>
      <ul>
        <li>20</li>
        <li>40</li>
        <li>60</li>
        <li>80</li>
        <li>100</li>
        <li>120</li>
        <li>140</li>
        <li>180</li>
        <li>200</li>
        <li>full</li>
      </ul>
      <p>Colors. Expect array of colors. Elements will be colored by array of colors. If not enough colors was specified will be used the last one. To hide element set 'none'.</p>
      <b>Available colors:</b>
      <ul>
        <li>green</li>
        <li>red</li>
        <li>blue</li>
        <li>black</li>
        <li>white</li>
        <li>purple</li>
        <li>orange</li>
        <li>none</li>
      </ul>
    </div>
  )
  .add('Different sizes', () => 
    <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap'}}>
      <h3>Default</h3>
      <Icon />
      <h3>20</h3>
      <Icon size='20'/>
      <h3>40</h3>
      <Icon size='40'/>
      <h3>60</h3>
      <Icon size='60'/>
      <h3>80</h3>
      <Icon size='80'/>
      <h3>100</h3>
      <Icon size='100'/>
      <h3>120</h3>
      <Icon size='120'/>
      <h3>140</h3>
      <Icon size='140'/>
      <h3>160</h3>
      <Icon size='160'/>
      <h3>180</h3>
      <Icon size='180'/>
      <h3>200</h3>
      <Icon size='200'/>
      <h3>full</h3>
      <div style={{width: '140px', heiht: '140px', border: 'solid 1px black'}}>
        <Icon size='full'/>
      </div>
    </div>
  )
  .add('Different colors', () => 
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      <div style={{display: 'flex', flexDirection: 'column', margin: '20px'}}>
        <h3>Default</h3>
        <Icon />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', margin: '20px'}}>
        <h3>green</h3>
        <Icon colors={['green']}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', margin: '20px'}}>
        <h3>red</h3>
        <Icon colors={['red']}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', margin: '20px'}}>
        <h3>blue</h3>
        <Icon colors={['blue']}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', margin: '20px'}}>
        <h3>black</h3>
        <Icon colors={['black']}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', margin: '20px', backgroundColor: 'black', color: 'white', textAlign: 'center'}}>
        <h3>white</h3>
        <Icon colors={['white']}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', margin: '20px'}}>
        <h3>purple</h3>
        <Icon colors={['purple']}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', margin: '20px'}}>
        <h3>orange</h3>
        <Icon colors={['orange']}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', margin: '20px'}}>
        <h3>none</h3>
        <Icon colors={['none']}/>
      </div>
    </div>
  )
  .add('Available icons', () => 
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      <div style={{display: 'flex', flexDirection: 'column', margin: '20px', textAlign: 'center'}} >
        <h3>Default</h3>
        <Icon />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', margin: '20px', textAlign: 'center'}} >
        <h3>Login</h3>
        <Icon name='login'/>
      </div>
    </div>
  )
  .add('Colorized default icon', () => 
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      <div style={{display: 'flex', flexDirection: 'column', width: '200px', justifyContent: 'center', alignItems: 'center', margin: '20px', textAlign: 'center'}} >
        <p>{"<Icon />"}</p>
        <Icon />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', width: '200px', justifyContent: 'center', alignItems: 'center', margin: '20px', textAlign: 'center'}} >
        <p>{"<Icon colors={['green']} />"}</p>
        <Icon colors={['green']} />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', width: '200px', justifyContent: 'center', alignItems: 'center', margin: '20px', textAlign: 'center'}} >
        <p>{"<Icon colors={['green', 'red']} />"}</p>
        <Icon colors={['green', 'red']} />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', width: '200px', justifyContent: 'center', alignItems: 'center', margin: '20px', textAlign: 'center'}} >
        <p>{"<Icon colors={['green', 'red', 'blue']} />"}</p>
        <Icon colors={['green', 'red', 'blue']} />
      </div>
    </div>
  )
  .add('Colorized login icon', () => 
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      <div style={{display: 'flex', flexDirection: 'column', width: '200px', justifyContent: 'center', alignItems: 'center', margin: '20px', textAlign: 'center'}} >
        <p>{"<Icon name='login' />"}</p>
        <Icon name='login' />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', width: '200px', justifyContent: 'center', alignItems: 'center', margin: '20px', textAlign: 'center'}} >
        <p>{"<Icon name='login' colors={['green']} />"}</p>
        <Icon name='login' colors={['green']} />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', width: '200px', justifyContent: 'center', alignItems: 'center', margin: '20px', textAlign: 'center'}} >
        <p>{"<Icon name='login' colors={['green', 'red']} />"}</p>
        <Icon name='login' colors={['green', 'red']} />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', width: '200px', justifyContent: 'center', alignItems: 'center', margin: '20px', textAlign: 'center'}} >
        <p>{"<Icon name='login' colors={['red', 'blue', 'green']} />"}</p>
        <Icon name='login' colors={['red', 'blue', 'green']} />
      </div>
    </div>
  )
