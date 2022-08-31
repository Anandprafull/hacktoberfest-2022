import Link from 'next/link';
import Button from 'components/button';
import { events } from 'lib';
import Section from 'components/section';
import Divider from 'components/divider';
import Anchor from 'components/anchor';
import Marquee from 'components/marquee';
import Card, { NewCard } from 'components/card';
import Column from 'components/column';

const Home = () => {
  return (
    <>
      <Card
        primary="spark"
        secondary="psybeam"
        title="days"
        number="26"
        delay="0s"
      />
      <Card
        primary="psybeam"
        secondary="surf"
        title="hours"
        number="08"
        delay="0.5s"
      />
      <Card
        primary="surf"
        secondary="spark"
        title="minutes"
        number="33"
        delay="1.3s"
      />
      <Marquee p2="outline" p3="fill psybeam" direction="forwards" />
      <Marquee p1="outline" p2="fill giga" p3="fill surf" direction="reverse" />

      <Section>
        <Divider />
        <Anchor href="#prepare-to-hack" />
        <h2>Prepare to Hack</h2>
        <h3>
          Hacktoberfest is for everyone. Whether it’s your first time —or your
          ninth, it’s almost time to hack out four pristine pull/merge requests
          and complete your mission for open source. Join other members of the
          open source community on the Hacktoberfest Discord.
        </h3>
        <Button as="a" href="https://discord.gg/hacktoberfest" special>
          Join the hacktoberfest discord
        </Button>
        <div>
          <Column>
            <NewCard primary="psybeam" secondary="surf">
              <h3>Preptember</h3>
              <p>
                September is the perfect time to prepare for Hacktoberfest. Get
                a jump start by finding projects to contribute to, adding the
                ‘hacktoberfest’ tag to your projects, or familiarizing yourself
                with Git.
              </p>
              <Link href="/events#kit" passHref>
                <Button as="a" color="giga">
                  Get the Event Kit
                </Button>
              </Link>
              <Link href="/participation" passHref>
                <Button as="a" color="giga">
                  How to Participate
                </Button>
              </Link>
            </NewCard>
            <NewCard primary="surf" secondary="psybeam">
              <h3>New for 2022</h3>
              <p>
                Hacktoberfest isn’t all about code. Anyone who writes, designs,
                tests, mentors, or organizes offers much needed support for
                open-source projects all over the world.
              </p>
              <Link href="/about#non-code" passHref>
                <Button as="a" color="giga">
                  Learn About Non-Code Contributions
                </Button>
              </Link>
            </NewCard>
          </Column>
        </div>
      </Section>

      <Section style="right">
        <Divider style="reverse" />
        <Anchor href="#events-all-month-long" />
        <h2>Events All Month Long</h2>
        <h3>
          Join forces in virtual and in-person events to get your pull/merge
          requests done as a team, learn new skills, and meet lifelong friends.
        </h3>
        {events.map((event) => (
          <div key={event.title}>
            <h3>{event.title}</h3>
            <p>{event.content}</p>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Location: {event.location}</p>
          </div>
        ))}

        <Link href="/events" passHref>
          <Button special as="a">
            See All Events
          </Button>
        </Link>
      </Section>

      <Section style="center">
        <h2>Support Open Source</h2>
        <h3>
          Open-source projects, maintained by community-minded coders, make the
          modern internet function. Supporting that essential work, and the
          folks behind it, is what Hacktoberfest is all about. <br />
          <br />
          You have skills that can help keep these projects continue
          running—let’s get to it.
        </h3>
        <Link href="/donate">
          <Button special as="a">
            Donate To Open-Source Projects
          </Button>
        </Link>
      </Section>
    </>
  );
};

export default Home;
