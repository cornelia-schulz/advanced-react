import React from 'react'
import { create } from 'react-test-renderer'
import Details from '../Details'


// snapshot tests are good for when components should not change much in the future, it will fail when something changes. 
// run just jest with npx jest, if your component changes in the future, use npx jest -u to update the snapshot
test("snapshot", () => {
  const c = create(<Details />)
  expect(c.toJSON()).toMatchSnapshot();
});

test("shows modal when toggleModal is called", () => {
  const c = create(<Details search={() => {}} />);
  const instance = c.getInstance();

  expect(instance.state.showModal).toBe(false);
  instance.toggleModal();
  expect(instance.state.showModal).toBe(true);
})