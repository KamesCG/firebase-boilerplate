/**
 * @name RegionTopDashboard
 * @description Default top region for dashboard template.
 */
/* --- Global --- */
import { ColorMode } from "@components";
// import { MeshBalance } from "@components";
export default props => (
  <Atom.Flex alignCenter between sx={{ variant: "regions.header" }}>
    {/* Left */}
    <Atom.Flex alignCenter>
      <Atom.Flex>
        <ColorMode />
      </Atom.Flex>

      {/* Menu */}
      <Atom.Flex alignCenter ml={4}>
        <Molecule.Menu
          sx={{
            mx: 1
          }}
          items={[
            {
              label: "Profile",
              to: "/dashboard/profile"
            },
            {
              label: "Leaderboard",
              to: "/dashboard/leaderboard"
            },
            {
              label: "Collections",
              to: "/dashboard/collections"
            },
            {
              label: "Team",
              to: "/dashboard/team"
            }
          ]}
        />
      </Atom.Flex>
    </Atom.Flex>

    {/* Right */}
    <Atom.Flex alignCenter></Atom.Flex>
  </Atom.Flex>
);
