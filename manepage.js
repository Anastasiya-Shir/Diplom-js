const getDeviceType = () => {
    const ua = navigator.userAgent,
      types = [
        {
          type: "tablet",
          value: /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)
        },
        {
          type: "mobile",
          value: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
            ua
          )
        }
      ];
    try {
      return types.filter(type => type.value)[0].type;
    } catch (error) {
      return "desktop";
    }
  };
