import moment from "moment/moment";

export function withPrettyTime(Component) {
  function Wrapper(props) {
    const { date } = props;
    const formattedDate = moment(date).fromNow();
    return <Component {...props} date={formattedDate} />;
  }

  return Wrapper;
}
