const createSearchList = (rigs) => {
  const rigList = [];
  const wellList = [];

  rigs.forEach(({ name, id, wells }) => {
    rigList.push({
      name,
      id,
      type: 'Rig',
    });
    wellList.push(...wells);
  });

  return {
    rigs: rigList,
    wells: wellList,
  };
};

export default createSearchList;
