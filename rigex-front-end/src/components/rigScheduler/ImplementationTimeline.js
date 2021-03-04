import React from 'react';

import './implementationTimelineStyle.scss';

const ImplementationTimeline = ({ deliveryPhases }) => {
  let runningMargin = [0, 0];

  const PreDeliveryPhaseHeading = () => {
    return (
      <tr>
        <th className="table-heading">PRE- DELIVERY PHASE</th>
        <td className="pre-delivery-content">
          {deliveryPhases.data.preDeliveryPhase[0].text}
        </td>
      </tr>
    );
  };

  const DeliveryPhaseHeading = () => {
    const totalDurationInHours = deliveryPhases.data.deliveryPhase.reduce(
      function (previous, current) {
        return parseFloat(previous + current.durationInHours);
      },
      0
    );
    const totalDurationInWeeks = totalDurationInHours / 40;
    const ab = [1, totalDurationInWeeks];
    const start = ab[0];
    const end = ab[1];
    const interval = (end - start) / 5;
    const out = Array(5)
      .fill()
      .map((_, i) => [start + i * interval, start + (i + 1) * interval]);
    let sortedOut = out.map(function (subArray) {
      return subArray.map(function (elem) {
        return Number(elem.toFixed(0));
      });
    });
    return (
      <tr>
        <th className="table-heading">DELIVERY PHASE</th>
        <tr className="date-ranges">
          <td>
            WEEK {sortedOut[0][0]} - {sortedOut[0][1]}
          </td>
          <td>
            WEEK {sortedOut[1][0]} - {sortedOut[1][1]}
          </td>
          <td>
            WEEK {sortedOut[2][0]} - {sortedOut[2][1]}
          </td>
          <td>
            WEEK {sortedOut[3][0]} - {sortedOut[3][1]}
          </td>
          <td>
            WEEK {sortedOut[4][0]} - {sortedOut[4][1]}
          </td>
        </tr>
      </tr>
    );
  };

  const DeliveryPhaseBar = ({ duration }) => {
    runningMargin[0] = runningMargin[1];
    const currentDuration = parseFloat(duration);
    const totalDuration = deliveryPhases.data.deliveryPhase.reduce(function (
      previous,
      current
    ) {
      return parseFloat(previous + current.durationInHours);
    },
    0);
    const durationPercentage = (100 * currentDuration) / totalDuration;
    runningMargin[1] = runningMargin[0] + durationPercentage;
    return (
      <div>
        <div
          className="bar"
          style={{
            width: durationPercentage + '%',
            marginLeft: runningMargin[0] + '%',
          }}
        >
          #
        </div>
      </div>
    );
  };

  const ImplementationTimelineTable = () => {
    if (deliveryPhases) {
      return (
        <table className="implementation-timeline-table">
          <thead
            data-parent="#bodyContainer"
            data-toggle="table-body"
            data-target="#tbodyCollapse"
            className="table-heading-container"
          >
            <tr className="table-title-row">
              <th className="table-title" colSpan="2">
                IMPLEMENTATION TIMELINE
              </th>
            </tr>
            <PreDeliveryPhaseHeading />
            <DeliveryPhaseHeading />
          </thead>
          <tbody className="table-body" id="tbodyCollapse">
            {deliveryPhases.data.deliveryPhase.map((phase) => (
              <tr key={phase.text}>
                <td id={phase.text}>&#8226; {phase.text}</td>
                <td>
                  <DeliveryPhaseBar
                    duration={phase.durationInHours}
                    name={phase.text}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <div className="rig-scheduler-implementation-timeline-grid-container">
        <ImplementationTimelineTable />
        <span className="assumptions">
          <em>
            <strong>ASSUMPTIONS:</strong> As-is product implementation. Any
            customizations or changes to standard configuration will extend
            timeline. Training efforts primarily managed by the customer with
            support from SLT during initial training. Additional training from
            SLT available upon request.
          </em>
        </span>
      </div>
    </div>
  );
};

export default ImplementationTimeline;
