import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom';
import Button from './button';

storiesOf('Button', module)
  .addDecorator(story => (
    <BrowserRouter>
      <div>
        {story()}
      </div>
    </BrowserRouter>
  ))
  .add('with text', () => 
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <h3>Without text</h3>
      <p>{"<Button />"}</p>
      <Button />
      <h3>With text length less than 30 symbols</h3>
      <p>{"<Button label='Some text here' />"}</p>
      <Button label='Some text here' />
      <h3>With text length more than 30 symbols</h3>
      <p>{"<Button label='This text is too loooooooooooooooooooooooong' />"}</p>
      <Button label='This text is too loooooooooooooooooooooooong' />
    </div>
  )
  .add('with url', () => 
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div>
        <h3>Empty url</h3>
        <p>{"<Button label='Button' url='' />"}</p>
        <Button label='Button' url='' />
      </div>
      <div>
        <h3>Local url</h3>
        <p>{"<Button label='Button' url='/test' />"}</p>
        <Button label='Button' url='/test' />
      </div>
      <div>
        <h3>External url</h3>
        <p>{"<Button label='Button' url='http://google.com'/>"}</p>
        <Button label='Button' url='http://google.com'/>
      </div>
    </div>
  )
  .add('different shapes', () =>
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div>
        <h3>Circle</h3>
        <p>{"<Button label='button' shape='circle'} />"}</p>
        <Button label='button' shape='circle' />
      </div>
      <div>
        <h3>Pill</h3>
        <p>{"<Button label='button' shape='pill'} />"}</p>
        <Button label='button' shape='pill' />
      </div>
      <div>
        <h3>Rounded</h3>
        <p>{"<Button label='button' shape='rounded'} />"}</p>
        <Button label='button' shape='rounded' />
      </div>
      <div>
        <h3>Square</h3>
        <p>{"<Button label='button' shape='square'} />"}</p>
        <Button label='button' shape='square' />
      </div>
    </div>
  )
  .add('different sizes', () =>
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      <div style={{margin: '0 15px'}}>
        <h3>Size 40</h3>
        <p>{"<Button label='button' size='40' />"}</p>
        <div style={{width: '200px', height: '60px', border: 'solid 1px black'}}>
          <Button label='button' size='40' />
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 60</h3>
        <p>{"<Button label='button' size='60' />"}</p>
        <div style={{width: '200px', height: '60px', border: 'solid 1px black'}}>
          <Button label='button' size='60' />
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 80</h3>
        <p>{"<Button label='button' size='80' />"}</p>
        <div style={{width: '200px', height: '60px', border: 'solid 1px black'}}>
          <Button label='button' size='80' />
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 100</h3>
        <p>{"<Button label='button' size='100' />"}</p>
        <div style={{width: '200px', height: '60px', border: 'solid 1px black'}}>
          <Button label='button' size='100' />
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 120</h3>
        <p>{"<Button label='button' size='120' />"}</p>
        <div style={{width: '200px', height: '60px', border: 'solid 1px black'}}>
          <Button label='button' size='120' />
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 140</h3>
        <p>{"<Button label='button' size='140' />"}</p>
        <div style={{width: '200px', height: '60px', border: 'solid 1px black'}}>
          <Button label='button' size='140' />
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 160</h3>
        <p>{"<Button label='button' size='160' />"}</p>
        <div style={{width: '200px', height: '60px', border: 'solid 1px black'}}>
          <Button label='button' size='160' />
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size full</h3>
        <p>{"<Button label='button' size='full' />"}</p>
        <div style={{width: '200px', height: '60px', border: 'solid 1px black'}}>
          <Button label='button' size='full' />
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size auto</h3>
        <p>{"<Button label='button' size='auto' />"}</p>
        <div style={{width: '200px', height: '60px', border: 'solid 1px black'}}>
          <Button label='Buttoooon' size='auto' />
        </div>
      </div>
    </div>
  )
  .add('different sizes for shape circle', () =>
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      <div style={{margin: '0 15px'}}>
        <h3>Size 40</h3>
        <p>{"<Button label='button' size='40' shape='circle'/>"}</p>
        <div style={{width: '200px', height: '200px', border: 'solid 1px black'}}>
          <Button label='button' size='40' shape='circle'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 60</h3>
        <p>{"<Button label='button' size='60' shape='circle'/>"}</p>
        <div style={{width: '200px', height: '200px', border: 'solid 1px black'}}>
          <Button label='button' size='60' shape='circle'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 80</h3>
        <p>{"<Button label='button' size='80' shape='circle'/>"}</p>
        <div style={{width: '200px', height: '200px', border: 'solid 1px black'}}>
          <Button label='button' size='80' shape='circle'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 100</h3>
        <p>{"<Button label='button' size='100' shape='circle'/>"}</p>
        <div style={{width: '200px', height: '200px', border: 'solid 1px black'}}>
          <Button label='button' size='100' shape='circle'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 120</h3>
        <p>{"<Button label='button' size='120' shape='circle'/>"}</p>
        <div style={{width: '200px', height: '200px', border: 'solid 1px black'}}>
          <Button label='button' size='120' shape='circle'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 140</h3>
        <p>{"<Button label='button' size='140' shape='circle'/>"}</p>
        <div style={{width: '200px', height: '200px', border: 'solid 1px black'}}>
          <Button label='button' size='140' shape='circle'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 160</h3>
        <p>{"<Button label='button' size='160' shape='circle'/>"}</p>
        <div style={{width: '200px', height: '200px', border: 'solid 1px black'}}>
          <Button label='button' size='160' shape='circle'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size full</h3>
        <p>{"<Button label='button' size='full' shape='circle'/>"}</p>
        <div style={{width: '200px', height: '200px', border: 'solid 1px black'}}>
          <Button label='button' size='full' shape='circle'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size auto</h3>
        <p>{"<Button label='button' size='auto' shape='circle'/>"}</p>
        <div style={{width: '200px', height: '200px', border: 'solid 1px black'}}>
          <Button label='button' size='auto' shape='circle'/>
        </div>
      </div>
    </div>
  )
  .add('different sizes for shape square', () =>
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      <div style={{margin: '0 15px'}}>
        <h3>Size 40</h3>
        <p>{"<Button label='button' size='40' shape='square'/>"}</p>
        <div style={{width: '200px', height: '200px', border: 'solid 1px black'}}>
          <Button label='button' size='40' shape='square'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 60</h3>
        <p>{"<Button label='button' size='60' shape='square'/>"}</p>
        <div style={{width: '200px', height: '200px', border: 'solid 1px black'}}>
          <Button label='button' size='60' shape='square'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 80</h3>
        <p>{"<Button label='button' size='80' shape='square'/>"}</p>
        <div style={{width: '200px', height: '200px', border: 'solid 1px black'}}>
          <Button label='button' size='80' shape='square'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 100</h3>
        <p>{"<Button label='button' size='100' shape='square'/>"}</p>
        <div style={{width: '200px', height: '200px', border: 'solid 1px black'}}>
          <Button label='button' size='100' shape='square'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 120</h3>
        <p>{"<Button label='button' size='120' shape='square'/>"}</p>
        <div style={{width: '200px', height: '200px', border: 'solid 1px black'}}>
          <Button label='button' size='120' shape='square'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 140</h3>
        <p>{"<Button label='button' size='140' shape='square'/>"}</p>
        <div style={{width: '200px', height: '200px', border: 'solid 1px black'}}>
          <Button label='button' size='140' shape='square'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 160</h3>
        <p>{"<Button label='button' size='160' shape='square'/>"}</p>
        <div style={{width: '200px', height: '200px', border: 'solid 1px black'}}>
          <Button label='button' size='160' shape='square'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size full</h3>
        <p>{"<Button label='button' size='full' shape='square'/>"}</p>
        <div style={{width: '200px', height: '200px', border: 'solid 1px black'}}>
          <Button label='button' size='full' shape='square'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size auto</h3>
        <p>{"<Button label='button' size='auto' shape='square'/>"}</p>
        <div style={{width: '200px', height: '200px', border: 'solid 1px black'}}>
          <Button label='button' size='auto' shape='square'/>
        </div>
      </div>
    </div>
  )
  .add('different sizes for shape rounded', () =>
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      <div style={{margin: '0 15px'}}>
        <h3>Size 40</h3>
        <p>{"<Button label='button' size='40' shape='rounded'/>"}</p>
        <div style={{width: '200px', height: '80px', border: 'solid 1px black'}}>
          <Button label='button' size='40' shape='rounded'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 60</h3>
        <p>{"<Button label='button' size='60' shape='rounded'/>"}</p>
        <div style={{width: '200px', height: '80px', border: 'solid 1px black'}}>
          <Button label='button' size='60' shape='rounded'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 80</h3>
        <p>{"<Button label='button' size='80' shape='rounded'/>"}</p>
        <div style={{width: '200px', height: '80px', border: 'solid 1px black'}}>
          <Button label='button' size='80' shape='rounded'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 100</h3>
        <p>{"<Button label='button' size='100' shape='rounded'/>"}</p>
        <div style={{width: '200px', height: '80px', border: 'solid 1px black'}}>
          <Button label='button' size='100' shape='rounded'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 120</h3>
        <p>{"<Button label='button' size='120' shape='rounded'/>"}</p>
        <div style={{width: '200px', height: '80px', border: 'solid 1px black'}}>
          <Button label='button' size='120' shape='rounded'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 140</h3>
        <p>{"<Button label='button' size='140' shape='rounded'/>"}</p>
        <div style={{width: '200px', height: '80px', border: 'solid 1px black'}}>
          <Button label='button' size='140' shape='rounded'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 160</h3>
        <p>{"<Button label='button' size='160' shape='rounded'/>"}</p>
        <div style={{width: '200px', height: '80px', border: 'solid 1px black'}}>
          <Button label='button' size='160' shape='rounded'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size full</h3>
        <p>{"<Button label='button' size='full' shape='rounded'/>"}</p>
        <div style={{width: '200px', height: '80px', border: 'solid 1px black'}}>
          <Button label='button' size='full' shape='rounded'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size auto</h3>
        <p>{"<Button label='buttttttton' size='auto' shape='rounded'/>"}</p>
        <div style={{width: '200px', height: '80px', border: 'solid 1px black'}}>
          <Button label='buttttttton' size='auto' shape='rounded'/>
        </div>
      </div>
    </div>
  )
  .add('different sizes for shape pill', () =>
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      <div style={{margin: '0 15px'}}>
        <h3>Size 40</h3>
        <p>{"<Button label='button' size='40' shape='pill'/>"}</p>
        <div style={{width: '200px', height: '80px', border: 'solid 1px black'}}>
          <Button label='button' size='40' shape='pill'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 60</h3>
        <p>{"<Button label='button' size='60' shape='pill'/>"}</p>
        <div style={{width: '200px', height: '80px', border: 'solid 1px black'}}>
          <Button label='button' size='60' shape='pill'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 80</h3>
        <p>{"<Button label='button' size='80' shape='pill'/>"}</p>
        <div style={{width: '200px', height: '80px', border: 'solid 1px black'}}>
          <Button label='button' size='80' shape='pill'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 100</h3>
        <p>{"<Button label='button' size='100' shape='pill'/>"}</p>
        <div style={{width: '200px', height: '80px', border: 'solid 1px black'}}>
          <Button label='button' size='100' shape='pill'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 120</h3>
        <p>{"<Button label='button' size='120' shape='pill'/>"}</p>
        <div style={{width: '200px', height: '80px', border: 'solid 1px black'}}>
          <Button label='button' size='120' shape='pill'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 140</h3>
        <p>{"<Button label='button' size='140' shape='pill'/>"}</p>
        <div style={{width: '200px', height: '80px', border: 'solid 1px black'}}>
          <Button label='button' size='140' shape='pill'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size 160</h3>
        <p>{"<Button label='button' size='160' shape='pill'/>"}</p>
        <div style={{width: '200px', height: '80px', border: 'solid 1px black'}}>
          <Button label='button' size='160' shape='pill'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size full</h3>
        <p>{"<Button label='button' size='full' shape='pill'/>"}</p>
        <div style={{width: '200px', height: '80px', border: 'solid 1px black'}}>
          <Button label='button' size='full' shape='pill'/>
        </div>
      </div>
      <div style={{margin: '0 15px'}}>
        <h3>Size auto</h3>
        <p>{"<Button label='buttttttton' size='auto' shape='pill'/>"}</p>
        <div style={{width: '200px', height: '80px', border: 'solid 1px black'}}>
          <Button label='buttttttton' size='auto' shape='pill'/>
        </div>
      </div>
    </div>
  )
  .add('Colors', () =>
    <div style={{textAlign: 'center'}}>
      <h2>Hover it</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', textAlign: 'center'}}>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Default</h3>
          <p>{"<Button label='button' />"}</p>
          <Button label='button' />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Green</h3>
          <p>{"<Button label='button' color='green' />"}</p>
          <Button label='button' color='green' />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Blue</h3>
          <p>{"<Button label='button' color='blue' />"}</p>
          <Button label='button' color='blue' />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Red</h3>
          <p>{"<Button label='button' color='red' />"}</p>
          <Button label='button' color='red' />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Black</h3>
          <p>{"<Button label='button' color='black' />"}</p>
          <Button label='button' color='black' />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Purple</h3>
          <p>{"<Button label='button' color='purple' />"}</p>
          <Button label='button' color='purple' />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Orange</h3>
          <p>{"<Button label='button' color='orange' />"}</p>
          <Button label='button' color='orange' />
        </div>
      </div>
    </div>
  )
  .add('Different colors for bordered', () =>
    <div style={{textAlign: 'center'}}>
      <h2>Hover it & click</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', textAlign: 'center'}}>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Default</h3>
          <p>{"<Button label='button' isBordered={true} />"}</p>
          <Button label='button' isBordered={true} />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Green</h3>
          <p>{"<Button label='button' color='green' isBordered={true} />"}</p>
          <Button label='button' color='green' isBordered={true} />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Blue</h3>
          <p>{"<Button label='button' color='blue' isBordered={true} />"}</p>
          <Button label='button' color='blue' isBordered={true} />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Red</h3>
          <p>{"<Button label='button' color='red' isBordered={true} />"}</p>
          <Button label='button' color='red' isBordered={true} />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Black</h3>
          <p>{"<Button label='button' color='black' isBordered={true} />"}</p>
          <Button label='button' color='black' isBordered={true} />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Purple</h3>
          <p>{"<Button label='button' color='purple' isBordered={true} />"}</p>
          <Button label='button' color='purple' isBordered={true} />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Orange</h3>
          <p>{"<Button label='button' color='orange' isBordered={true} />"}</p>
          <Button label='button' color='orange' isBordered={true} />
        </div>
      </div>
    </div>
  )
  .add('Different colors for transparented', () =>
    <div style={{textAlign: 'center'}}>
      <h2>Hover it</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', textAlign: 'center'}}>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Default</h3>
          <p>{"<Button label='button' isTransparent={true} />"}</p>
          <Button label='button' isTransparent={true} />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Green</h3>
          <p>{"<Button label='button' color='green' isTransparent={true} />"}</p>
          <Button label='button' color='green' isTransparent={true} />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Blue</h3>
          <p>{"<Button label='button' color='blue' isTransparent={true} />"}</p>
          <Button label='button' color='blue' isTransparent={true} />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Red</h3>
          <p>{"<Button label='button' color='red' isTransparent={true} />"}</p>
          <Button label='button' color='red' isTransparent={true} />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Black</h3>
          <p>{"<Button label='button' color='black' isTransparent={true} />"}</p>
          <Button label='button' color='black' isTransparent={true} />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Purple</h3>
          <p>{"<Button label='button' color='purple' isTransparent={true} />"}</p>
          <Button label='button' color='purple' isTransparent={true} />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Orange</h3>
          <p>{"<Button label='button' color='orange' isTransparent={true} />"}</p>
          <Button label='button' color='orange' isTransparent={true} />
        </div>
      </div>
    </div>
  )
  .add('Different colors for transparented & bordered', () =>
    <div style={{textAlign: 'center'}}>
      <h2>Hover it & click</h2>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Default</h3>
          <p>{"<Button label='button' isTransparent={true} isBordered={true} />"}</p>
          <Button label='button' isTransparent={true} isBordered={true} />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Green</h3>
          <p>{"<Button label='button' color='green' isTransparent={true} isBordered={true} />"}</p>
          <Button label='button' color='green' isTransparent={true} isBordered={true} />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Blue</h3>
          <p>{"<Button label='button' color='blue' isTransparent={true} isBordered={true} />"}</p>
          <Button label='button' color='blue' isTransparent={true} isBordered={true} />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Red</h3>
          <p>{"<Button label='button' color='red' isTransparent={true} isBordered={true} />"}</p>
          <Button label='button' color='red' isTransparent={true} isBordered={true} />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Black</h3>
          <p>{"<Button label='button' color='black' isTransparent={true} isBordered={true} />"}</p>
          <Button label='button' color='black' isTransparent={true} isBordered={true} />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Purple</h3>
          <p>{"<Button label='button' color='purple' isTransparent={true} isBordered={true} />"}</p>
          <Button label='button' color='purple' isTransparent={true} isBordered={true} />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Orange</h3>
          <p>{"<Button label='button' color='orange' isTransparent={true} isBordered={true} />"}</p>
          <Button label='button' color='orange' isTransparent={true} isBordered={true} />
        </div>
      </div>
    </div>
  )
  .add('Different statuses', () =>
    <div style={{textAlign: 'center'}}>
      <h2>Hover it & click</h2>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Disabled</h3>
          <p>{"<Button label='click me' status='disabled' />"}</p>
          <Button label='click me' status='disabled' onClick={action('I was pressed')} />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Unclickable</h3>
          <p>{"<Button label='click me' status='unclickable' />"}</p>
          <Button label='click me' status='unclickable' onClick={action('I was pressed')} />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Pressed</h3>
          <p>{"<Button label='click me' status='pressed' />"}</p>
          <Button label='click me' status='pressed' onClick={action('I was pressed')} />
        </div>
      </div>
    </div>
  )
  .add('Different colors for status pressed', () =>
    <div style={{textAlign: 'center'}}>
      <h2>Hover it</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', textAlign: 'center'}}>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Default</h3>
          <p>{"<Button label='pressed' status='pressed' />"}</p>
          <Button label='pressed' status='pressed' />
          <Button label='button'/>
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Green</h3>
          <p>{"<Button label='pressed' color='green' status='pressed' />"}</p>
          <Button label='pressed' color='green' status='pressed' />
          <Button label='button' color='green' />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Blue</h3>
          <p>{"<Button label='pressed' color='blue' status='pressed' />"}</p>
          <Button label='pressed' color='blue' status='pressed' />
          <Button label='button' color='blue' />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Red</h3>
          <p>{"<Button label='pressed' color='red' status='pressed' />"}</p>
          <Button label='pressed' color='red' status='pressed' />
          <Button label='button' color='red' />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Black</h3>
          <p>{"<Button label='pressed' color='black' status='pressed' />"}</p>
          <Button label='pressed' color='black' status='pressed' />
          <Button label='button' color='black' />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Purple</h3>
          <p>{"<Button label='pressed' color='purple' status='pressed' />"}</p>
          <Button label='pressed' color='purple' status='pressed' />
          <Button label='button' color='purple' />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Orange</h3>
          <p>{"<Button label='pressed' color='orange' status='pressed' />"}</p>
          <Button label='pressed' color='orange' status='pressed' />
          <Button label='button' color='orange' />
        </div>
      </div>
    </div>
  )
  .add('Different colors for status pressed & bordered & transparent', () =>
    <div style={{textAlign: 'center'}}>
      <h2>Hover it</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', textAlign: 'center'}}>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Default</h3>
          <p>{"<Button label='pressed' status='pressed' isTransparent={true} isBordered={true} />"}</p>
          <Button label='pressed' status='pressed' isTransparent={true} isBordered={true} />
          <Button label='button' isTransparent={true} isBordered={true} />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Green</h3>
          <p>{"<Button label='pressed' color='green' status='pressed' isTransparent={true} isBordered={true} />"}</p>
          <Button label='pressed' color='green' status='pressed' isTransparent={true} isBordered={true} />
          <Button label='button' color='green' isTransparent={true} isBordered={true} />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Blue</h3>
          <p>{"<Button label='pressed' color='blue' status='pressed' isTransparent={true} isBordered={true} />"}</p>
          <Button label='pressed' color='blue' status='pressed' isTransparent={true} isBordered={true} />
          <Button label='button' color='blue' isTransparent={true} isBordered={true} />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Red</h3>
          <p>{"<Button label='pressed' color='red' status='pressed' isTransparent={true} isBordered={true} />"}</p>
          <Button label='pressed' color='red' status='pressed' isTransparent={true} isBordered={true} />
          <Button label='button' color='red' isTransparent={true} isBordered={true} />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Black</h3>
          <p>{"<Button label='pressed' color='black' status='pressed' isTransparent={true} isBordered={true} />"}</p>
          <Button label='pressed' color='black' status='pressed' isTransparent={true} isBordered={true} />
          <Button label='button' color='black' isTransparent={true} isBordered={true} />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Purple</h3>
          <p>{"<Button label='pressed' color='purple' status='pressed' isTransparent={true} isBordered={true} />"}</p>
          <Button label='pressed' color='purple' status='pressed' isTransparent={true} isBordered={true} />
          <Button label='button' color='purple' isTransparent={true} isBordered={true} />
        </div>
        <div style={{margin: '20px', width: '280px'}}>
          <h3>Orange</h3>
          <p>{"<Button label='pressed' color='orange' status='pressed' isTransparent={true} isBordered={true} />"}</p>
          <Button label='pressed' color='orange' status='pressed' isTransparent={true} isBordered={true} />
          <Button label='button' color='orange' isTransparent={true} isBordered={true} />
        </div>
      </div>
    </div>
  )
  .add('Exmaples', () =>
    <div style={{display: 'flex', flexWrap: 'nowrap'}}>
      <div style={{display: 'flex', flexDirection: 'column', width: '250px'}}>
        <h3>Default</h3>
        <Button size='100' color='green' label='button'/>
        <br/>
        <Button size='100' color='green' label='button' isBordered={true}/>
        <br/>
        <Button size='100' color='green' label='button' isTransparent={true}/>
        <br/>
        <Button size='100' color='green' label='button' isBordered={true} isTransparent={true}/>
        <br/>
        <h3>Rounded</h3>
        <Button size='100' shape='rounded' color='blue' label='button'/>
        <br/>
        <Button size='100' shape='rounded' color='blue' label='button' isBordered={true}/>
        <br/>
        <Button size='100' shape='rounded' color='blue' label='button' isTransparent={true}/>
        <br/>
        <Button size='100' shape='rounded' color='blue' label='button' isBordered={true} isTransparent={true}/>
        <br/>
        <h3>Pill</h3>
        <Button size='100' shape='pill' color='red' label='button'/>
        <br/>
        <Button size='100' shape='pill' color='red' label='button' isBordered={true}/>
        <br/>
        <Button size='100' shape='pill' color='red' label='button' isTransparent={true}/>
        <br/>
        <Button size='100' shape='pill' color='red' label='button' isBordered={true} isTransparent={true}/>
        <br/>
        <h3>Square</h3>
        <Button size='100' shape='square' color='orange' label='button'/>
        <br/>
        <Button size='100' shape='square' color='orange' label='button' isBordered={true}/>
        <br/>
        <Button size='100' shape='square' color='orange' label='button' isTransparent={true}/>
        <br/>
        <Button size='100' shape='square' color='orange' label='button' isBordered={true} isTransparent={true}/>
        <br/>
        <h3>Circle</h3>
        <Button size='100' shape='circle' color='purple' label='button'/>
        <br/>
        <Button size='100' shape='circle' color='purple' label='button' isBordered={true}/>
        <br/>
        <Button size='100' shape='circle' color='purple' label='button' isTransparent={true}/>
        <br/>
        <Button size='100' shape='circle' color='purple' label='button' isBordered={true} isTransparent={true}/>
        <br/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', width: '250px'}}>
        <h3>Pressed</h3>
        <Button size='100' color='green' label='button' status='pressed' />
        <br/>
        <Button size='100' color='green' label='button' isBordered={true} status='pressed' />
        <br/>
        <Button size='100' color='green' label='button' isTransparent={true} status='pressed' />
        <br/>
        <Button size='100' color='green' label='button' isBordered={true} isTransparent={true} status='pressed' />
        <br/>
        <h3>Pressed</h3>
        <Button size='100' status='pressed' shape='rounded' color='blue' label='button'/>
        <br/>
        <Button size='100' status='pressed' shape='rounded' color='blue' label='button' isBordered={true}/>
        <br/>
        <Button size='100' status='pressed' shape='rounded' color='blue' label='button' isTransparent={true}/>
        <br/>
        <Button size='100' status='pressed' shape='rounded' color='blue' label='button' isBordered={true} isTransparent={true}/>
        <br/>
        <h3>Pressed</h3>
        <Button size='100' status='pressed' shape='pill' color='red' label='button'/>
        <br/>
        <Button size='100' status='pressed' shape='pill' color='red' label='button' isBordered={true}/>
        <br/>
        <Button size='100' status='pressed' shape='pill' color='red' label='button' isTransparent={true}/>
        <br/>
        <Button size='100' status='pressed' shape='pill' color='red' label='button' isBordered={true} isTransparent={true}/>
        <br/>
        <h3>Pressed</h3>
        <Button size='100' status='pressed' shape='square' color='orange' label='button'/>
        <br/>
        <Button size='100' status='pressed' shape='square' color='orange' label='button' isBordered={true}/>
        <br/>
        <Button size='100' status='pressed' shape='square' color='orange' label='button' isTransparent={true}/>
        <br/>
        <Button size='100' status='pressed' shape='square' color='orange' label='button' isBordered={true} isTransparent={true}/>
        <br/>
        <h3>Pressed</h3>
        <Button size='100' status='pressed' shape='circle' color='purple' label='button'/>
        <br/>
        <Button size='100' status='pressed' shape='circle' color='purple' label='button' isBordered={true}/>
        <br/>
        <Button size='100' status='pressed' shape='circle' color='purple' label='button' isTransparent={true}/>
        <br/>
        <Button size='100' status='pressed' shape='circle' color='purple' label='button' isBordered={true} isTransparent={true}/>
        <br/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', width: '250px'}}>
        <h3>Unclickable</h3>
        <Button size='100' color='green' label='button' status='unclickable'/>
        <br/>
        <Button size='100' color='green' label='button' isBordered={true} status='unclickable'/>
        <br/>
        <Button size='100' color='green' label='button' isTransparent={true} status='unclickable'/>
        <br/>
        <Button size='100' color='green' label='button' isBordered={true} isTransparent={true} status='unclickable'/>
        <br/>
        <h3>Unclickable</h3>
        <Button size='100' status='unclickable' shape='rounded' color='blue' label='button'/>
        <br/>
        <Button size='100' status='unclickable' shape='rounded' color='blue' label='button' isBordered={true}/>
        <br/>
        <Button size='100' status='unclickable' shape='rounded' color='blue' label='button' isTransparent={true}/>
        <br/>
        <Button size='100' status='unclickable' shape='rounded' color='blue' label='button' isBordered={true} isTransparent={true}/>
        <br/>
        <h3>Unclickable</h3>
        <Button size='100' status='unclickable' shape='pill' color='red' label='button'/>
        <br/>
        <Button size='100' status='unclickable' shape='pill' color='red' label='button' isBordered={true}/>
        <br/>
        <Button size='100' status='unclickable' shape='pill' color='red' label='button' isTransparent={true}/>
        <br/>
        <Button size='100' status='unclickable' shape='pill' color='red' label='button' isBordered={true} isTransparent={true}/>
        <br/>
        <h3>Unclickable</h3>
        <Button size='100' status='unclickable' shape='square' color='orange' label='button'/>
        <br/>
        <Button size='100' status='unclickable' shape='square' color='orange' label='button' isBordered={true}/>
        <br/>
        <Button size='100' status='unclickable' shape='square' color='orange' label='button' isTransparent={true}/>
        <br/>
        <Button size='100' status='unclickable' shape='square' color='orange' label='button' isBordered={true} isTransparent={true}/>
        <br/>
        <h3>Unclickable</h3>
        <Button size='100' status='unclickable' shape='circle' color='purple' label='button'/>
        <br/>
        <Button size='100' status='unclickable' shape='circle' color='purple' label='button' isBordered={true}/>
        <br/>
        <Button size='100' status='unclickable' shape='circle' color='purple' label='button' isTransparent={true}/>
        <br/>
        <Button size='100' status='unclickable' shape='circle' color='purple' label='button' isBordered={true} isTransparent={true}/>
        <br/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', width: '250px'}}>
        <h3>Disabled</h3>
        <Button size='100' color='green' label='button' status='disabled' />
        <br/>
        <Button size='100' color='green' label='button' isBordered={true} status='disabled' />
        <br/>
        <Button size='100' color='green' label='button' isTransparent={true} status='disabled' />
        <br/>
        <Button size='100' color='green' label='button' isBordered={true} isTransparent={true} status='disabled' />
        <br/>
        <h3>Disabled</h3>
        <Button size='100' status='disabled' shape='rounded' color='blue' label='button'/>
        <br/>
        <Button size='100' status='disabled' shape='rounded' color='blue' label='button' isBordered={true}/>
        <br/>
        <Button size='100' status='disabled' shape='rounded' color='blue' label='button' isTransparent={true}/>
        <br/>
        <Button size='100' status='disabled' shape='rounded' color='blue' label='button' isBordered={true} isTransparent={true}/>
        <br/>
        <h3>Disabled</h3>
        <Button size='100' status='disabled' shape='pill' color='red' label='button'/>
        <br/>
        <Button size='100' status='disabled' shape='pill' color='red' label='button' isBordered={true}/>
        <br/>
        <Button size='100' status='disabled' shape='pill' color='red' label='button' isTransparent={true}/>
        <br/>
        <Button size='100' status='disabled' shape='pill' color='red' label='button' isBordered={true} isTransparent={true}/>
        <br/>
        <h3>Disabled</h3>
        <Button size='100' status='disabled' shape='square' color='orange' label='button'/>
        <br/>
        <Button size='100' status='disabled' shape='square' color='orange' label='button' isBordered={true}/>
        <br/>
        <Button size='100' status='disabled' shape='square' color='orange' label='button' isTransparent={true}/>
        <br/>
        <Button size='100' status='disabled' shape='square' color='orange' label='button' isBordered={true} isTransparent={true}/>
        <br/>
        <h3>Disabled</h3>
        <Button size='100' status='disabled' shape='circle' color='purple' label='button'/>
        <br/>
        <Button size='100' status='disabled' shape='circle' color='purple' label='button' isBordered={true}/>
        <br/>
        <Button size='100' status='disabled' shape='circle' color='purple' label='button' isTransparent={true}/>
        <br/>
        <Button size='100' status='disabled' shape='circle' color='purple' label='button' isBordered={true} isTransparent={true}/>
        <br/>
      </div>
    </div>
  )
  .add('onClick', () =>
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div>
        <h3>onClick</h3>
        <p>{"<Button label='click me' onClick={action('I was pressed')} />"}</p>
        <Button label='click me' onClick={action('I was pressed')} />
      </div>
    </div>
  )
