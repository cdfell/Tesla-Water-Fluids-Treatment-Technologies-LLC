import React from 'react';
import Loader from 'components/Loader/Loader';
import TextViewItem from 'components/FormItems/items/TextViewItem';
import ImagesViewItem from 'components/FormItems/items/ImagesViewItem';
import Widget from 'components/Widget/Widget';

type UsersWidgetProps = {
  record: {
    [rest: string]: any
};
loading?: boolean
}

const UsersWidget = ({record, loading}: UsersWidgetProps) => {

  const renderView = () => (
    <Widget className="widget-p-md" title={<h4>{'View User'}</h4>} >
      <ImagesViewItem
        label={'Avatar'}
        value={record.avatar}
      />

      <TextViewItem
        label={'First name'}
        value={record.firstName}
      />

      <TextViewItem
        label={'Last Name'}
        value={record.lastName}
      />

      <TextViewItem
        label={'Phone number'}
        value={record.phoneNumber}
      />

      <TextViewItem
        label={'Email'}
        value={record.email}
      />

      <TextViewItem
        label={'Disabled'}
        value={record.disabled}
      />
    </Widget>
  );

  if (loading || !record) {
    return <Loader />;
  }

  return renderView();
}

export default UsersWidget;
