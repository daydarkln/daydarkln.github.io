import { Divider, List } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import { PropTypes } from 'mobx-react';
import * as React from 'react';

export const Category = (props) => {
  const { locations, name, } = props;
  return (
    <div className="category">
      <List header={<Divider>{name}</Divider>}> {/* Создать компонент List, куда будет передаваться data 
      в определенном формате и по ней будут проходится и выводить список элементов, также определить headerSection и footerSection*/}
        {locations.map((place) => (
          <List.Item key={place.id}>
            <Paragraph editable={{ onChange: console.log, }}>
              {place.name}
            </Paragraph>
          </List.Item>
        ))}
      </List>
    </div>
  );
};

Category.propTypes = {
  locations: PropTypes.array,
  name: PropTypes.string,
};
