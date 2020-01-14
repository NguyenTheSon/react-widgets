import { stripIndent } from 'common-tags'

export default function(widgetName) {
  return stripIndent`
    import { ${widgetName} } from 'react-widgets';
    let people = listOfPeople();

    let GroupHeading = ({ item }) => (
      <span>{item + ' letters long'}</span>
    );

    let widget = (
      <${widgetName}
        data={people}
        textField='name'
        groupComponent={GroupHeading}
        groupBy={person => person.name.length}
      />
    )

    render(widget);
  `
}
