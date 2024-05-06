const q = query(collectionRef, where(documentId, "==", itemId));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const activities = [];
        querySnapshot.forEach((doc) => {
          activities.push({
            id: doc.id,
            clientname: doc.data().clientname,
            address: doc.data().address,
            detail: doc.data().detail,
          });
        });
        setActivities(activities);
      });
      return () => unsubscribe();