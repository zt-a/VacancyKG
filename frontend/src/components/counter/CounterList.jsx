import Counter from "./Counter"

const CounterList = ({counterList}) => {
  return (
    <div className="row items spincrement-container animated">
      {counterList.map((counter, index) => (
        <div className="col-xl-3 col-md-6 col-12 item">
          <Counter num={counter.num} info={counter.info} icon={counter.icon} />
        </div>
      ))}
    </div>
  )
}

export default CounterList;