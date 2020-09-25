import React from "react";
import SectionDivided from "../form/SectionDivided";
import Tabs from "../form/Tabs";

function TabsSection() {

  return (
    <SectionDivided
      contentLeft={{
        "division": "l4",
        "content": (
          <>
            <h2 className="section-title">What I do..</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.
             </p>
            <p>
              Mauris dolor augue, vulputate in pharetra ac, facilisis nec
              libero. Fusce condimentum gravida urna, vitae scelerisque erat
              ornare nec.
            </p>
          </>
        )
      }}
      contentRight={{
        "division": "l6", "offset": "l2",
        "content": (
          <Tabs
            tabs={[
              {
                "id": "photography",
                "label": "Photography",
                "active": true,
                "content": (
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.
                  </p>
                )
              },
              {
                "id": "editing",
                "label": "Editing",
                "content": (
                  <p>
                    Mauris dolor augue, vulputate in pharetra ac, facilisis nec
                    libero. Fusce condimentum gravida urna, vitae scelerisque erat
                    ornare nec.
                  </p>
                )
              }
            ]} />
        )
      }}
    />
  );
}

export default TabsSection;